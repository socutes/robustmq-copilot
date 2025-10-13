import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getBlacklistListHttp, BlacklistRaw } from '@/services/mqtt';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Shield, User, Hash, Globe, Clock, FileText } from 'lucide-react';
import { DeleteBlacklistButton } from './components/delete-blacklist-button';

const BLACKLIST_TYPE_MAP = {
  ClientId: 'Client ID',
  User: 'User',
  Ip: 'IP Address',
  ClientIdMatch: 'Client ID Match',
  UserMatch: 'User Match',
  IPCIDR: 'IP CIDR',
};

const getBlacklistTypeIcon = (type: string) => {
  switch (type) {
    case 'ClientId':
    case 'ClientIdMatch':
      return Hash;
    case 'User':
    case 'UserMatch':
      return User;
    case 'Ip':
    case 'IPCIDR':
      return Globe;
    default:
      return Shield;
  }
};

interface BlackListProps {
  extraActions?: React.ReactNode;
}

export default function BlackList({ extraActions }: BlackListProps) {
  const columns: ColumnDef<BlacklistRaw>[] = [
    {
      id: 'blacklist_type',
      accessorKey: 'blacklist_type',
      header: 'Blacklist Type',
      cell: ({ row }) => {
        const type = row.original.blacklist_type;
        const Icon = getBlacklistTypeIcon(type);
        return (
          <Badge
            variant="outline"
            className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
          >
            <Icon className="mr-1 h-3 w-3" />
            {BLACKLIST_TYPE_MAP[type as keyof typeof BLACKLIST_TYPE_MAP] || type}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'resource_name',
      header: 'Resource Name',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium font-mono text-sm">{row.original.resource_name || '-'}</span>
        </div>
      ),
    },
    {
      accessorKey: 'desc',
      header: 'Description',
      cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.original.desc || '-'}</span>,
    },
    {
      accessorKey: 'end_time',
      header: 'End Time',
      cell: ({ row }) => {
        const endTime = row.original.end_time;
        let timeDisplay = '-';

        if (endTime) {
          try {
            const date = new Date(endTime * 1000);
            if (!isNaN(date.getTime())) {
              timeDisplay = format(date, 'yyyy-MM-dd HH:mm:ss');
            }
          } catch (error) {
            console.warn('Invalid date format:', endTime, error);
          }
        }

        return (
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="font-mono text-sm">{timeDisplay}</span>
          </div>
        );
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => <DeleteBlacklistButton blacklist={row.original} />,
      size: 100,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    try {
      const ret = await getBlacklistListHttp({
        pagination: {
          offset: pageIndex * pageSize,
          limit: pageSize,
        },
      });
      return {
        data: ret.blacklistsList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch blacklist data:', error);
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
        queryKey="QueryBlacklistListData"
        headerClassName="bg-purple-600 text-white"
        extraActions={extraActions}
      />
    </div>
  );
}
