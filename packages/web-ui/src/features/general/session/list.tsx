import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getSessionListHttp } from '@/services/mqtt';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { User, Hash, Server, Timer, MessageSquare, Clock, Calendar, RotateCcw, LogOut } from 'lucide-react';

export default function SessionList() {
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
      accessorKey: 'connection_id',
      header: 'Connection ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Hash className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.connection_id || '-'}</span>
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
      accessorKey: 'session_expiry',
      header: 'Session Expiry',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800"
        >
          <Timer className="mr-1 h-3 w-3" />
          {row.original.session_expiry ? `${row.original.session_expiry}s` : '-'}
        </Badge>
      ),
    },
    {
      accessorKey: 'is_contain_last_will',
      header: 'Has Last Will',
      cell: ({ row }) => (
        <Badge
          variant={row.original.is_contain_last_will ? 'default' : 'secondary'}
          className={
            row.original.is_contain_last_will
              ? 'bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
          }
        >
          <MessageSquare className="mr-1 h-3 w-3" />
          {row.original.is_contain_last_will ? 'Yes' : 'No'}
        </Badge>
      ),
    },
    {
      accessorKey: 'last_will_delay_interval',
      header: 'Last Will Delay',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm">
            {row.original.last_will_delay_interval ? `${row.original.last_will_delay_interval}s` : '-'}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'create_time',
      header: 'Created At',
      cell: ({ row }) => {
        if (!row.original.create_time) return '-';
        return (
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{format(new Date(row.original.create_time * 1000), 'yyyy-MM-dd HH:mm:ss')}</span>
          </div>
        );
      },
    },
    {
      accessorKey: 'reconnect_time',
      header: 'Reconnected At',
      cell: ({ row }) => {
        if (!row.original.reconnect_time) return '-';
        return (
          <div className="flex items-center space-x-2">
            <RotateCcw className="h-4 w-4 text-gray-500" />
            <span className="text-sm">
              {format(new Date(row.original.reconnect_time * 1000), 'yyyy-MM-dd HH:mm:ss')}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: 'distinct_time',
      header: 'Disconnect Time',
      cell: ({ row }) => {
        if (!row.original.distinct_time) return '-';
        return (
          <div className="flex items-center space-x-2">
            <LogOut className="h-4 w-4 text-gray-500" />
            <span className="text-sm">
              {format(new Date(row.original.distinct_time * 1000), 'yyyy-MM-dd HH:mm:ss')}
            </span>
          </div>
        );
      },
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    const ret = await getSessionListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
    });
    return {
      data: ret.sessionsList,
      totalCount: ret.totalCount,
    };
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QuerySessionListData"
        headerClassName="bg-purple-600 text-white"
      />
    </div>
  );
}
