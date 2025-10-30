import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getTopicListHttp, deleteTopic, readMessages } from '@/services/mqtt';
import { Button } from '@/components/ui/button';
import { Clock, Eye, Copy, Trash2, MessageSquare, Inbox, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { useState, useEffect, useRef } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import { useNavigate } from '@tanstack/react-router';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
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
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function TopicList() {
  const [topicType, setTopicType] = useState<'all' | 'normal' | 'system'>('normal');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [topicToDelete, setTopicToDelete] = useState<string | null>(null);

  // Message viewer state
  const [messageSheetOpen, setMessageSheetOpen] = useState(false);
  const [selectedTopicForMessages, setSelectedTopicForMessages] = useState<string>('');
  const [messageOffset, setMessageOffset] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch messages for selected topic
  const { data: messagesData, isLoading: isLoadingMessages } = useQuery({
    queryKey: ['topicMessages', selectedTopicForMessages, messageOffset],
    queryFn: async () => {
      if (!selectedTopicForMessages) return [];
      const response = await readMessages({
        topic: selectedTopicForMessages,
        offset: messageOffset,
      });
      // Only return first 10 messages
      return response.slice(0, 10);
    },
    enabled: !!selectedTopicForMessages && messageSheetOpen,
  });

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (messagesData && messagesData.length > 0 && messageOffset > 0) {
      // Only scroll when loading next messages (offset > 0)
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesData, messageOffset]);

  // Handle view messages click
  const handleViewMessages = (topicName: string) => {
    setSelectedTopicForMessages(topicName);
    setMessageOffset(0);
    setMessageSheetOpen(true);
  };

  // Handle load next 10 messages
  const handleLoadNext = () => {
    setMessageOffset(prev => prev + 10);
  };

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
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:from-green-600 hover:to-emerald-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
            onClick={e => {
              e.stopPropagation();
              handleViewMessages(row.original.topic_name);
            }}
          >
            <MessageSquare className="mr-0.5 h-2.5 w-2.5" />
            Messages
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
      size: 200,
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

      {/* Message Viewer Sheet */}
      <Sheet open={messageSheetOpen} onOpenChange={setMessageSheetOpen}>
        <SheetContent className="sm:max-w-[600px] flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-md">
                <Inbox className="h-3.5 w-3.5 text-white" />
              </div>
              <span>Topic Messages</span>
            </SheetTitle>
            <SheetDescription>
              Viewing messages from topic:{' '}
              <span className="font-mono text-blue-600 dark:text-blue-400">{selectedTopicForMessages}</span>
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-hidden mt-4">
            <ScrollArea className="h-full">
              <div className="space-y-3 pr-4">
                {isLoadingMessages ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-green-600 border-t-transparent" />
                      <span>Loading messages...</span>
                    </div>
                  </div>
                ) : !messagesData || messagesData.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                    <Inbox className="h-16 w-16 mb-4 text-gray-300 dark:text-gray-700" />
                    <p className="text-lg font-medium">No messages found</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {messageOffset === 0
                        ? `No messages in topic "${selectedTopicForMessages}"`
                        : 'No more messages available'}
                    </p>
                  </div>
                ) : (
                  <>
                    {messagesData.map((message, index) => (
                      <div
                        key={`${message.offset}-${index}`}
                        className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-3 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-semibold text-sm text-blue-600 dark:text-blue-400">
                              {selectedTopicForMessages}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                              Offset: {message.offset}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                            <Clock className="h-3 w-3" />
                            <span>{format(new Date(message.timestamp * 1000), 'yyyy-MM-dd HH:mm:ss')}</span>
                          </div>
                        </div>

                        <div className="text-sm bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 p-3 rounded-lg border border-gray-200 dark:border-gray-700 font-mono break-all">
                          {message.content}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Load Next Button */}
          {messagesData && messagesData.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <Button
                onClick={handleLoadNext}
                disabled={isLoadingMessages}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-200"
              >
                {isLoadingMessages ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Loading...
                  </>
                ) : (
                  <>
                    <ChevronRight className="mr-2 h-4 w-4" />
                    Load Next 10 Messages
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Showing messages {messageOffset} - {messageOffset + (messagesData?.length || 0)}
              </p>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
