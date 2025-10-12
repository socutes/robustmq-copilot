import { ColumnSetting, DataTable } from '@/components/table';
import { getClientListHttp } from '@/services/mqtt';
import { FilterValue } from '@/components/table/filter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Hash, Wifi, Clock, Eye, User } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from '@tanstack/react-router';

export default function SessionList() {
  const navigate = useNavigate();
  const columns: ColumnSetting<any, any>[] = [
    {
      id: 'client_id',
      accessorKey: 'client_id',
      header: 'Client ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="font-medium">{row.original.client_id}</span>
        </div>
      ),
      attr: true,
    },
    {
      id: 'connection_id',
      accessorKey: 'connection_id',
      header: 'Connection ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <Hash className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium font-mono">{row.original.connection_id}</span>
        </div>
      ),
      attr: true,
    },
    {
      accessorKey: 'connection_type',
      header: 'Connection Type',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 border-purple-300 dark:from-purple-950 dark:to-purple-900 dark:text-purple-300 dark:border-purple-700"
        >
          <Wifi className="mr-1 h-3 w-3" />
          {row.original.network_connection?.connection_type || '-'}
        </Badge>
      ),
      attr: true,
    },
    {
      accessorKey: 'protocol',
      header: 'Protocol',
      cell: ({ row }) => (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
          {row.original.network_connection?.protocol || '-'}
        </Badge>
      ),
      attr: true,
    },
    {
      accessorKey: 'create_time',
      header: 'Created At',
      cell: ({ row }) => {
        const createTime = row.original.mqtt_connection?.create_time;
        if (!createTime) return '-';

        // 如果是时间戳（数字），转换为日期格式
        const timestamp = typeof createTime === 'string' ? parseInt(createTime) : createTime;
        const formattedTime = format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');

        return (
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{formattedTime}</span>
          </div>
        );
      },
      attr: true,
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            navigate({ to: '/general/client/$clientId', params: { clientId: row.original.client_id } });
          }}
        >
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
      ),
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number, searchValue: FilterValue[]) => {
    const ret = await getClientListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
      filers: searchValue,
    });
    return {
      data: ret.clientsList,
      totalCount: ret.totalCount,
    };
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QueryClientListData"
        headerClassName="bg-purple-600 text-white"
      />
    </div>
  );
}
