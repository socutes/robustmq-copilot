import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getConnectorListHttp, ConnectorRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Plug,
  Settings,
  Database,
  Clock,
  Server,
  Activity,
  Eye,
  Tag,
  MessageSquare,
  Share2,
  FileText,
} from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { DeleteConnectorButton } from './components/delete-connector-button';

const CONNECTOR_TYPE_MAP = {
  kafka: 'Kafka',
  pulsar: 'Pulsar',
  rabbitmq: 'RabbitMQ',
  greptime: 'GreptimeDB',
  postgres: 'PostgreSQL',
  mysql: 'MySQL',
  mongodb: 'MongoDB',
  file: 'Local File',
};

const getConnectorTypeIcon = (type: string) => {
  const lowerType = type.toLowerCase();
  switch (lowerType) {
    case 'kafka':
      return MessageSquare;
    case 'pulsar':
      return Share2;
    case 'rabbitmq':
      return MessageSquare;
    case 'greptime':
      return Clock;
    case 'postgres':
    case 'mysql':
    case 'mongodb':
      return Database;
    case 'file':
      return FileText;
    default:
      return Plug;
  }
};

const getConnectorTypeBadgeStyle = (type: string) => {
  const lowerType = type.toLowerCase();
  switch (lowerType) {
    case 'kafka':
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm';
    case 'pulsar':
      return 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-sm';
    case 'rabbitmq':
      return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm';
    case 'greptime':
      return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm';
    case 'postgres':
      return 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm';
    case 'mysql':
      return 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-sm';
    case 'mongodb':
      return 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm';
    case 'file':
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-sm';
    default:
      return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm';
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
  const navigate = useNavigate();

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
          <Badge variant="default" className={getConnectorTypeBadgeStyle(type)}>
            <Icon className="mr-1 h-3 w-3" />
            {CONNECTOR_TYPE_MAP[type.toLowerCase() as keyof typeof CONNECTOR_TYPE_MAP] || type}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'topic_name',
      header: 'Topic Name',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.topic_name || '-'}</span>
        </div>
      ),
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
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex items-center justify-center space-x-2">
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
            onClick={() => {
              navigate({
                to: '/data-integration/connector/$connectorName',
                params: { connectorName: row.original.connector_name },
                state: { connectorData: row.original },
              });
            }}
          >
            <Eye className="mr-0.5 h-2.5 w-2.5" />
            Details
          </Button>
          <DeleteConnectorButton connectorName={row.original.connector_name} />
        </div>
      ),
      size: 140,
      minSize: 120,
      maxSize: 160,
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
