import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getTopicRewriteListHttp, TopicRewriteRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Target, Settings } from 'lucide-react';
import { ViewTopicRewriteButton } from './components/view-topic-rewrite-button';

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
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QueryTopicRewriteListData"
        headerClassName="bg-purple-600 text-white"
        extraActions={extraActions}
      />
    </div>
  );
}
