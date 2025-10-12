import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getSessionListHttp } from '@/services/mqtt';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  User,
  Hash,
  Server,
  Timer,
  MessageSquare,
  Clock,
  Calendar,
  Eye,
  Info,
  LogOut,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

// 根据字段名返回对应的图标
const getFieldIcon = (key: string) => {
  const lowerKey = key.toLowerCase();

  if (lowerKey.includes('time')) return <Clock className="h-4 w-4 text-blue-500" />;
  if (lowerKey.includes('id')) return <Hash className="h-4 w-4 text-purple-500" />;
  if (lowerKey.includes('expiry')) return <Timer className="h-4 w-4 text-yellow-500" />;
  if (lowerKey.includes('broker')) return <Server className="h-4 w-4 text-indigo-500" />;
  if (lowerKey.includes('will')) return <MessageSquare className="h-4 w-4 text-orange-500" />;
  if (lowerKey.includes('delay')) return <Clock className="h-4 w-4 text-cyan-500" />;

  return <Info className="h-4 w-4 text-gray-500" />;
};

// 格式化显示值的辅助函数
const formatValue = (key: string, value: any): string => {
  if (value === null || value === undefined) return '-';

  // 如果是对象，返回 JSON 字符串
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  // 如果字段名包含 time 并且是数字（时间戳），格式化为日期时间
  if (key.toLowerCase().includes('time') && (typeof value === 'number' || !isNaN(Number(value)))) {
    try {
      const timestamp = typeof value === 'string' ? parseInt(value) : value;
      return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
    } catch {
      return String(value);
    }
  }

  return String(value);
};

export default function SessionList() {
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const columns: ColumnDef<any>[] = [
    {
      id: 'client_id',
      accessorKey: 'client_id',
      header: 'Client ID',
      cell: ({ row }) => (
        <div
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate({ to: '/general/client/$clientId', params: { clientId: row.original.client_id } })}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium text-purple-600 dark:text-purple-400 hover:underline">
            {row.original.client_id}
          </span>
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
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const connectionId = row.original.connection_id;
        const isOnline = connectionId && connectionId > 0;

        return (
          <Badge
            variant={isOnline ? 'default' : 'secondary'}
            className={
              isOnline
                ? 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-sm'
                : 'bg-gradient-to-r from-red-400 to-red-500 text-white shadow-sm'
            }
          >
            {isOnline ? (
              <>
                <CheckCircle className="mr-1 h-3 w-3" />
                Online
              </>
            ) : (
              <>
                <XCircle className="mr-1 h-3 w-3" />
                Offline
              </>
            )}
          </Badge>
        );
      },
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
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSelectedSession(row.original);
            setIsDialogOpen(true);
          }}
        >
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
      ),
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
    <>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DataTable
          columns={columns}
          fetchDataFn={fetchDataFn}
          queryKey="QuerySessionListData"
          headerClassName="bg-purple-600 text-white"
        />
      </div>

      {/* Session Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[92vw] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-purple-600" />
              <span>Session Details</span>
            </DialogTitle>
          </DialogHeader>

          {selectedSession && (
            <div className="grid grid-cols-1 gap-4 mt-4">
              {Object.entries(selectedSession).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start space-x-4 p-5 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{getFieldIcon(key)}</div>
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide whitespace-nowrap">
                      {key.replace(/_/g, ' ')}
                    </label>
                    <div className="mt-2 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                      {formatValue(key, value)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
