import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getSubscribeListHttp } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { User, Route, Server, Wifi, Shield, ToggleLeft, Archive, Settings, Hash, FileText, Clock } from 'lucide-react';

export default function SubscribeList() {
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
    },
    {
      accessorKey: 'broker_id',
      header: 'Broker ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Server className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.broker_id || '-'}</span>
        </div>
      ),
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
        <div className="flex items-center space-x-2">
          <Archive className="h-4 w-4 text-gray-500" />
          <span className="text-sm">{row.original.preserve_retain || '-'}</span>
        </div>
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
      accessorKey: 'properties',
      header: 'Properties',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-gray-500" />
          <span className="text-sm truncate max-w-[200px]" title={row.original.properties}>
            {row.original.properties || '-'}
          </span>
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
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    const ret = await getSubscribeListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
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
