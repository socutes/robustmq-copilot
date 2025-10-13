import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getSubscribeListHttp } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Route, Wifi, Shield, ToggleLeft, Archive, Settings, Hash, Clock, Eye } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function SubscribeList() {
  const navigate = useNavigate();
  const columns: ColumnDef<any>[] = [
    {
      id: 'client_id',
      accessorKey: 'client_id',
      header: 'Client ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium">{row.original.client_id}</span>
        </div>
      ),
      attr: true,
    },
    {
      accessorKey: 'path',
      header: 'Path',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Route className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm break-all">{row.original.path || '-'}</span>
        </div>
      ),
      attr: true,
    },
    {
      accessorKey: 'protocol',
      header: 'Protocol',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
        >
          <Wifi className="mr-1 h-3 w-3" />
          {row.original.protocol || '-'}
        </Badge>
      ),
    },
    {
      accessorKey: 'qos',
      header: 'QoS',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800"
        >
          <Shield className="mr-1 h-3 w-3" />
          {row.original.qos || '-'}
        </Badge>
      ),
    },
    {
      accessorKey: 'no_local',
      header: 'No Local',
      cell: ({ row }) => (
        <Badge
          variant={row.original.no_local ? 'default' : 'secondary'}
          className={
            row.original.no_local
              ? 'bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
          }
        >
          <ToggleLeft className="mr-1 h-3 w-3" />
          {row.original.no_local ? 'Yes' : 'No'}
        </Badge>
      ),
    },
    {
      accessorKey: 'preserve_retain',
      header: 'Preserve Retain',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
        >
          <Archive className="mr-1 h-3 w-3" />
          {row.original.preserve_retain ?? '-'}
        </Badge>
      ),
    },
    {
      accessorKey: 'retain_handling',
      header: 'Retain Handling',
      cell: ({ row }) => (
        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
          <Settings className="mr-1 h-3 w-3" />
          {row.original.retain_handling || '-'}
        </Badge>
      ),
    },
    {
      accessorKey: 'pk_id',
      header: 'PK ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Hash className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.pk_id || '-'}</span>
        </div>
      ),
    },
    {
      accessorKey: 'create_time',
      header: 'Created At',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm">{row.original.create_time || '-'}</span>
        </div>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button
          size="sm"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
          onClick={() => {
            navigate({
              to: '/general/subscribe/$subscribeId',
              params: { subscribeId: row.original.client_id || 'unknown' },
              state: { subscribeData: row.original },
            });
          }}
        >
          <Eye className="mr-0.5 h-2.5 w-2.5" />
          Details
        </Button>
      ),
      size: 100,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number, searchValue: any[]) => {
    const filter = searchValue[0];
    const ret = await getSubscribeListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
      ...(filter && {
        filter_field: filter.field,
        filter_values: filter.valueList,
        exact_match: filter.exactMatch ? 'true' : 'false',
      }),
    });
    return {
      data: ret.subscriptionsList,
      totalCount: ret.totalCount,
    };
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QuerySubscribeListData"
        headerClassName="bg-purple-600 text-white"
      />
    </div>
  );
}
