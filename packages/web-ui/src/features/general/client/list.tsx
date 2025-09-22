import { ColumnSetting, DataTable } from '@/components/table';
import { getClientListHttp } from '@/services/mqtt';
import { FilterValue } from '@/components/table/filter';
import { Badge } from '@/components/ui/badge';
import { Hash, Wifi, Globe, Clock } from 'lucide-react';

export default function SessionList() {
  const columns: ColumnSetting<any, any>[] = [
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
          {row.original.connection_type}
        </Badge>
      ),
      attr: true,
    },
    {
      accessorKey: 'protocol',
      header: 'Protocol',
      cell: ({ row }) => (
        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
          {row.original.protocol}
        </Badge>
      ),
      attr: true,
    },
    {
      accessorKey: 'source_addr',
      header: 'Source Address',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.source_addr}</span>
        </div>
      ),
      attr: true,
    },
    {
      accessorKey: 'create_time',
      header: 'Created At',
      cell: ({ row }) => {
        if (!row.original.create_time) return '-';
        return (
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{row.original.create_time}</span>
          </div>
        );
      },
      attr: true,
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
