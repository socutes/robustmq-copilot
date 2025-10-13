import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getAutoSubscribeListHttp, AutoSubscribeRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Route, Shield, ToggleLeft, Archive, Settings } from 'lucide-react';
import { DeleteAutoSubscribeButton } from './components/delete-auto-subscribe-button';

const QOS_MAP = {
  QoS0: 'QoS 0',
  QoS1: 'QoS 1',
  QoS2: 'QoS 2',
};

const RETAINED_HANDLING_MAP = {
  SendAtSubscribe: 'Send at Subscribe',
  SendAtSubscribeIfNotExist: 'Send if Not Exist',
  DoNotSend: 'Do Not Send',
};

const getQosBadgeStyle = (qos: string) => {
  switch (qos) {
    case 'QoS0':
      return 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm';
    case 'QoS1':
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm';
    case 'QoS2':
      return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-sm';
  }
};

interface AutoSubscriptionListProps {
  extraActions?: React.ReactNode;
}

export default function AutoSubscriptionList({ extraActions }: AutoSubscriptionListProps) {
  const columns: ColumnDef<AutoSubscribeRaw>[] = [
    {
      accessorKey: 'topic',
      header: 'Topic',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <Route className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium font-mono text-sm">{row.original.topic}</span>
        </div>
      ),
    },
    {
      accessorKey: 'qos',
      header: 'QoS',
      cell: ({ row }) => (
        <Badge variant="default" className={getQosBadgeStyle(row.original.qos)}>
          <Shield className="mr-1 h-3 w-3" />
          {QOS_MAP[row.original.qos as keyof typeof QOS_MAP] || row.original.qos}
        </Badge>
      ),
    },
    {
      accessorKey: 'no_local',
      header: 'No Local',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className={
            row.original.no_local
              ? 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800'
              : 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800'
          }
        >
          <ToggleLeft className="mr-1 h-3 w-3" />
          {row.original.no_local ? 'Yes' : 'No'}
        </Badge>
      ),
    },
    {
      accessorKey: 'retain_as_published',
      header: 'Retain as Published',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className={
            row.original.retain_as_published
              ? 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800'
              : 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800'
          }
        >
          <Archive className="mr-1 h-3 w-3" />
          {row.original.retain_as_published ? 'Yes' : 'No'}
        </Badge>
      ),
    },
    {
      accessorKey: 'retained_handling',
      header: 'Retained Handling',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
        >
          <Settings className="mr-1 h-3 w-3" />
          {RETAINED_HANDLING_MAP[row.original.retained_handling as keyof typeof RETAINED_HANDLING_MAP] ||
            row.original.retained_handling}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => <DeleteAutoSubscribeButton autoSubscribe={row.original} />,
      size: 100,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    try {
      const ret = await getAutoSubscribeListHttp({
        pagination: {
          offset: pageIndex * pageSize,
          limit: pageSize,
        },
      });
      return {
        data: ret.autoSubscribesList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch auto subscribe data:', error);
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
        queryKey="QueryAutoSubscriptionListData"
        headerClassName="bg-purple-600 text-white"
        extraActions={extraActions}
      />
    </div>
  );
}
