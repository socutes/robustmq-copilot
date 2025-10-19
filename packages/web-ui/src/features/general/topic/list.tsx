import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getTopicListHttp, deleteTopic } from '@/services/mqtt';
import { Button } from '@/components/ui/button';
import { Clock, Eye, Copy, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import { useNavigate } from '@tanstack/react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function TopicList() {
  const [topicType, setTopicType] = useState<'all' | 'normal' | 'system'>('normal');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [topicToDelete, setTopicToDelete] = useState<string | null>(null);

  // Delete topic mutation
  const deleteMutation = useMutation({
    mutationFn: deleteTopic,
    onSuccess: () => {
      // Show deleting progress toast
      toast({
        title: (
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 animate-pulse">
              <Trash2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 animate-bounce" />
            </div>
            <span>Deleting Topic...</span>
          </div>
        ),
        description: <div className="text-sm">Please wait while the topic is being removed from the system.</div>,
      });

      setDeleteDialogOpen(false);

      // Wait 2 seconds before refreshing the list
      setTimeout(() => {
        toast({
          title: (
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <Trash2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
              </div>
              <span>Topic Deleted Successfully!</span>
            </div>
          ),
          description: <div className="text-sm">The topic has been permanently deleted from the system.</div>,
        });
        queryClient.invalidateQueries({ queryKey: [`QueryTopicListData-${topicType}`] });
        setTopicToDelete(null);
      }, 2000);
    },
    onError: (error: any) => {
      console.error('Failed to delete topic:', error);
      setDeleteDialogOpen(false);
      setTopicToDelete(null);
    },
  });

  const handleDeleteClick = (topicName: string) => {
    setTopicToDelete(topicName);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (topicToDelete) {
      deleteMutation.mutate({ topic_name: topicToDelete });
    }
  };

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'topic_name',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Topic Name" />,
      cell: ({ row }) => (
        <div className="flex items-center justify-between max-w-2xl group">
          <span className="font-medium text-sm truncate" title={row.original.topic_name}>
            {row.original.topic_name || '-'}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-5 w-5 p-0 ml-1 flex-shrink-0 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={e => {
              e.stopPropagation();
              navigator.clipboard.writeText(row.original.topic_name || '');
            }}
          >
            <Copy className="h-3 w-3 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>
      ),
      enableSorting: true,
      size: 600,
    },
    {
      accessorKey: 'create_time',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
      cell: ({ row }) => {
        const createTime = row.original.create_time;
        if (!createTime) return '-';

        try {
          const timestamp = typeof createTime === 'string' ? parseInt(createTime) : createTime;
          const formattedTime = format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');

          return (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{formattedTime}</span>
            </div>
          );
        } catch {
          return '-';
        }
      },
      enableSorting: true,
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
            onClick={() => {
              navigate({ to: '/general/topic/$topicId', params: { topicId: row.original.topic_name } });
            }}
          >
            <Eye className="mr-0.5 h-2.5 w-2.5" />
            Details
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 px-1.5 py-0.5 h-6 text-[11px]"
            onClick={e => {
              e.stopPropagation();
              handleDeleteClick(row.original.topic_name);
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      ),
      size: 120,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    const ret = await getTopicListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
      topic_type: topicType,
    } as any);
    return {
      data: ret.topicsList,
      totalCount: ret.totalCount,
    };
  };

  const topicTypeSelector = (
    <Select value={topicType} onValueChange={(value: 'all' | 'normal' | 'system') => setTopicType(value)}>
      <SelectTrigger className="w-[180px] h-[34px]">
        <SelectValue placeholder="Select Topic Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Topics</SelectItem>
        <SelectItem value="normal">Normal Topics</SelectItem>
        <SelectItem value="system">System Topics</SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey={`QueryTopicListData-${topicType}`}
        defaultPageSize={20}
        defaultSorting={[{ id: 'create_time', desc: true }]}
        headerClassName="bg-purple-600 text-white"
        leftActions={topicTypeSelector}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Topic</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete topic <strong>"{topicToDelete}"</strong>?
              <br />
              <br />
              <span className="text-red-600 dark:text-red-400 font-medium">
                ⚠️ This action cannot be undone. All data including retain messages will be permanently deleted.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleteMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteMutation.isPending ? 'Deleting...' : 'Delete Topic'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
