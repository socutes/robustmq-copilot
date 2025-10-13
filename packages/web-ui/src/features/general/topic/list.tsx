import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getTopicListHttp } from '@/services/mqtt';
import { Button } from '@/components/ui/button';
import { Clock, Eye, Copy } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import { useNavigate } from '@tanstack/react-router';

export default function TopicList() {
  const [topicType, setTopicType] = useState<'all' | 'normal' | 'system'>('normal');
  const navigate = useNavigate();

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
      ),
      size: 100,
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
    </div>
  );
}
