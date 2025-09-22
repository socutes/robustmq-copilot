import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getTopicListHttp } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Hash, MessageCircle, Archive } from 'lucide-react';

export default function TopicList() {
  const columns: ColumnDef<any>[] = [
    {
      id: 'topic_id',
      accessorKey: 'topic_id',
      header: 'Topic ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <Hash className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium font-mono">{row.original.topic_id}</span>
        </div>
      ),
    },
    {
      accessorKey: 'topic_name',
      header: 'Topic Name',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-sm break-all">{row.original.topic_name || '-'}</span>
        </div>
      ),
    },
    {
      accessorKey: 'is_contain_retain_message',
      header: 'Has Retain Message',
      cell: ({ row }) => (
        <Badge
          variant={row.original.is_contain_retain_message ? 'default' : 'secondary'}
          className={
            row.original.is_contain_retain_message
              ? 'bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
          }
        >
          <Archive className="mr-1 h-3 w-3" />
          {row.original.is_contain_retain_message ? 'Yes' : 'No'}
        </Badge>
      ),
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    const ret = await getTopicListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
    });
    return {
      data: ret.topicsList,
      totalCount: ret.totalCount,
    };
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QueryTopicListData"
        defaultPageSize={20}
        headerClassName="bg-purple-600 text-white"
      />
    </div>
  );
}
