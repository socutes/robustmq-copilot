import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getBanLogListHttp, BanLogRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { FileX, Shield, User, MessageSquare, Clock, UserCheck } from 'lucide-react';
import { format } from 'date-fns';

const BAN_TYPE_MAP = {
  CLIENT_ID: 'Client ID',
  USERNAME: 'Username',
  IP_ADDRESS: 'IP Address',
};

const getBanTypeIcon = (type: string) => {
  switch (type) {
    case 'CLIENT_ID':
      return FileX;
    case 'USERNAME':
      return User;
    case 'IP_ADDRESS':
      return Shield;
    default:
      return FileX;
  }
};

interface BanLogListProps {
  extraActions?: React.ReactNode;
}

export default function BanLogList({ extraActions }: BanLogListProps) {
  const columns: ColumnDef<BanLogRaw>[] = [
    {
      accessorKey: 'id',
      header: 'Log ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <FileX className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium font-mono text-sm max-w-24 truncate" title={row.original.id}>
            {row.original.id}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'ban_type',
      header: 'Ban Type',
      cell: ({ row }) => {
        const type = row.original.ban_type;
        const Icon = getBanTypeIcon(type);
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
          >
            <Icon className="mr-1 h-3 w-3" />
            {BAN_TYPE_MAP[type as keyof typeof BAN_TYPE_MAP] || type}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'resource_name',
      header: 'Resource Name',
      cell: ({ row }) => (
        <span className="font-medium font-mono text-sm max-w-32 truncate" title={row.original.resource_name}>
          {row.original.resource_name}
        </span>
      ),
    },
    {
      accessorKey: 'reason',
      header: 'Reason',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-muted-foreground max-w-48 truncate" title={row.original.reason}>
            {row.original.reason || '-'}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'operator',
      header: 'Operator',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <UserCheck className="h-4 w-4 text-gray-500" />
          <span className="text-sm max-w-24 truncate" title={row.original.operator}>
            {row.original.operator || '-'}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'ban_time',
      header: 'Ban Time',
      cell: ({ row }) => {
        const timestamp = row.original.ban_time;
        let timeDisplay = '-';

        if (timestamp) {
          try {
            const date = new Date(timestamp * 1000);
            if (!isNaN(date.getTime())) {
              timeDisplay = format(date, 'yyyy-MM-dd HH:mm:ss');
            }
          } catch (error) {
            console.warn('Invalid ban time format:', timestamp, error);
          }
        }

        return (
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="font-mono text-sm max-w-32 truncate" title={timeDisplay}>
              {timeDisplay}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: 'expire_time',
      header: 'Expire Time',
      cell: ({ row }) => {
        const timestamp = row.original.expire_time;
        let timeDisplay = '-';

        if (timestamp) {
          try {
            const date = new Date(timestamp * 1000);
            if (!isNaN(date.getTime())) {
              timeDisplay = format(date, 'yyyy-MM-dd HH:mm:ss');
            }
          } catch (error) {
            console.warn('Invalid expire time format:', timestamp, error);
          }
        }

        return (
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="font-mono text-sm max-w-32 truncate" title={timeDisplay}>
              {timeDisplay}
            </span>
          </div>
        );
      },
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    try {
      const ret = await getBanLogListHttp({
        pagination: {
          offset: pageIndex * pageSize,
          limit: pageSize,
        },
      });
      return {
        data: ret.banLogsList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch ban log data:', error);
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
        queryKey="QueryBanLogListData"
        headerClassName="bg-purple-600 text-white"
        extraActions={extraActions}
      />
    </div>
  );
}
