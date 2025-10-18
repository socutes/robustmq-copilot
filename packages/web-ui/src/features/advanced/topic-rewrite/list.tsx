import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getTopicRewriteListHttp, TopicRewriteRaw, deleteTopicRewrite } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import { ArrowRight, Code, Target, Settings, Trash2 } from 'lucide-react';
import { ViewTopicRewriteButton } from './components/view-topic-rewrite-button';
import { toast } from '@/hooks/use-toast';

const ACTION_MAP = {
  All: 'All',
  Publish: 'Publish',
  Subscribe: 'Subscribe',
};

const getActionBadgeStyle = (action: string) => {
  switch (action) {
    case 'All':
      return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm';
    case 'Publish':
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm';
    case 'Subscribe':
      return 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-sm';
  }
};

interface TopicRewriteListProps {
  extraActions?: React.ReactNode;
}

export default function TopicRewriteList({ extraActions }: TopicRewriteListProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [ruleToDelete, setRuleToDelete] = useState<TopicRewriteRaw | null>(null);
  const queryClient = useQueryClient();

  // 删除规则 mutation
  const deleteRuleMutation = useMutation({
    mutationFn: (rule: TopicRewriteRaw) =>
      deleteTopicRewrite({
        action: rule.action,
        source_topic: rule.source_topic,
      }),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Topic rewrite rule deleted successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['QueryTopicRewriteListData'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error?.message || 'Failed to delete topic rewrite rule',
        variant: 'destructive',
      });
    },
  });

  const handleDeleteClick = (rule: TopicRewriteRaw) => {
    setRuleToDelete(rule);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (ruleToDelete) {
      deleteRuleMutation.mutate(ruleToDelete);
      setDeleteDialogOpen(false);
      setRuleToDelete(null);
    }
  };

  const columns: ColumnDef<TopicRewriteRaw>[] = [
    {
      accessorKey: 'source_topic',
      header: 'Source Topic',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium font-mono text-sm max-w-32 truncate" title={row.original.source_topic}>
            {row.original.source_topic}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'dest_topic',
      header: 'Destination Topic',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <ArrowRight className="h-4 w-4 text-gray-500" />
          <span className="font-medium font-mono text-sm max-w-32 truncate" title={row.original.dest_topic}>
            {row.original.dest_topic}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'regex',
      header: 'Regex Pattern',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Code className="h-4 w-4 text-gray-500" />
          <span
            className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded max-w-24 truncate"
            title={row.original.regex}
          >
            {row.original.regex || '-'}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <Badge variant="default" className={getActionBadgeStyle(row.original.action)}>
          <Settings className="mr-1 h-3 w-3" />
          {ACTION_MAP[row.original.action as keyof typeof ACTION_MAP] || row.original.action}
        </Badge>
      ),
    },
    {
      id: 'view',
      header: 'Details',
      cell: ({ row }) => <ViewTopicRewriteButton topicRewrite={row.original} />,
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-200 rounded-md"
            onClick={() => handleDeleteClick(row.original)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
      size: 80,
      minSize: 60,
      maxSize: 100,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    try {
      const ret = await getTopicRewriteListHttp({
        pagination: {
          offset: pageIndex * pageSize,
          limit: pageSize,
        },
      });
      return {
        data: ret.topicRewritesList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch topic rewrite data:', error);
      return {
        data: [],
        totalCount: 0,
      };
    }
  };

  return (
    <>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DataTable
          columns={columns}
          fetchDataFn={fetchDataFn}
          queryKey="QueryTopicRewriteListData"
          headerClassName="bg-purple-600 text-white"
          extraActions={extraActions}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Topic Rewrite Rule</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this topic rewrite rule?
              <br />
              <br />
              <strong>Source Topic:</strong> {ruleToDelete?.source_topic}
              <br />
              <strong>Destination Topic:</strong> {ruleToDelete?.dest_topic}
              <br />
              <strong>Action:</strong> {ruleToDelete?.action}
              <br />
              <br />
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleteRuleMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteRuleMutation.isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
