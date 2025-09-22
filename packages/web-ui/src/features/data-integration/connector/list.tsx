import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getConnectorListHttp, ConnectorRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Plug, Settings, Database, FileText, Clock, Server, Activity } from 'lucide-react';

const CONNECTOR_TYPE_MAP = {
  Kafka: 'Kafka',
  File: 'File',
  Database: 'Database',
  HTTP: 'HTTP',
};

const getConnectorTypeIcon = (type: string) => {
  switch (type) {
    case 'Kafka':
      return Database;
    case 'File':
      return FileText;
    case 'Database':
      return Database;
    case 'HTTP':
      return Activity;
    default:
      return Plug;
  }
};

const getStatusBadgeStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case 'running':
      return 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm';
    case 'stopped':
      return 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm';
    case 'error':
      return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-sm';
  }
};

interface ConnectorListProps {
  extraActions?: React.ReactNode;
}

export default function ConnectorList({ extraActions }: ConnectorListProps) {
  const columns: ColumnDef<ConnectorRaw>[] = [
    {
      accessorKey: 'connector_name',
      header: 'Connector Name',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <Plug className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium">{row.original.connector_name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'connector_type',
      header: 'Type',
      cell: ({ row }) => {
        const type = row.original.connector_type;
        const Icon = getConnectorTypeIcon(type);
        return (
          <Badge
            variant="outline"
            className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
          >
            <Icon className="mr-1 h-3 w-3" />
            {CONNECTOR_TYPE_MAP[type as keyof typeof CONNECTOR_TYPE_MAP] || type}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge variant="default" className={getStatusBadgeStyle(row.original.status)}>
          <Activity className="mr-1 h-3 w-3" />
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: 'topic_id',
      header: 'Topic ID',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.topic_id || '-'}</span>
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
      accessorKey: 'config',
      header: 'Configuration',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Settings className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-muted-foreground max-w-32 truncate" title={row.original.config}>
            {row.original.config || '-'}
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
          <span className="font-mono text-sm">{row.original.create_time || '-'}</span>
        </div>
      ),
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    try {
      const ret = await getConnectorListHttp({
        pagination: {
          offset: pageIndex * pageSize,
          limit: pageSize,
        },
      });
      return {
        data: ret.connectorsList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch connector data:', error);
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
        queryKey="QueryConnectorListData"
        headerClassName="bg-purple-600 text-white"
        extraActions={extraActions}
      />
    </div>
  );
}
