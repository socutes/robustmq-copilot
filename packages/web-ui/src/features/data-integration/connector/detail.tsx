import { useLocation, useNavigate } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Info,
  Plug,
  Settings,
  Database,
  FileText,
  Clock,
  Server,
  Activity,
  Share2,
  MessageSquare,
  Hash,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Tag,
} from 'lucide-react';
import { CommonLayout } from '@/components/layout/common-layout';
import { getMonitorData, getConnectorDetail, type ConnectorRaw } from '@/services/mqtt';
import { SimpleLineChart } from '@/features/general/dashboard/components/chart';

// 类型映射
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

// 格式化配置数据
const formatConfig = (config: string) => {
  try {
    const configObj = JSON.parse(config);
    return configObj;
  } catch {
    return {};
  }
};

// 获取连接器类型图标
const getConnectorTypeIcon = (type: string) => {
  const lowerType = type?.toLowerCase() || '';
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

// 获取连接器类型 Badge 样式
const getConnectorTypeBadgeStyle = (type: string) => {
  const lowerType = type?.toLowerCase() || '';
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

// 获取状态图标和样式
const getStatusInfo = (status: string) => {
  const lowerStatus = status?.toLowerCase() || '';
  switch (lowerStatus) {
    case 'running':
      return {
        icon: CheckCircle2,
        className: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm',
      };
    case 'stopped':
      return {
        icon: XCircle,
        className: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm',
      };
    case 'error':
      return {
        icon: AlertCircle,
        className: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm',
      };
    default:
      return {
        icon: Activity,
        className: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-sm',
      };
  }
};

// 获取不同 connector type 的配置字段
const getConfigFields = (type: string): { label: string; key: string }[] => {
  const lowerType = type?.toLowerCase() || '';
  switch (lowerType) {
    case 'kafka':
      return [
        { label: 'Bootstrap Servers', key: 'bootstrap_servers' },
        { label: 'Topic', key: 'topic' },
        { label: 'Key', key: 'key' },
      ];
    case 'pulsar':
      return [
        { label: 'Server', key: 'server' },
        { label: 'Topic', key: 'topic' },
        { label: 'Token', key: 'token' },
      ];
    case 'rabbitmq':
      return [
        { label: 'Server', key: 'server' },
        { label: 'Port', key: 'port' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Virtual Host', key: 'virtual_host' },
        { label: 'Exchange', key: 'exchange' },
        { label: 'Routing Key', key: 'routing_key' },
        { label: 'Delivery Mode', key: 'delivery_mode' },
        { label: 'Enable TLS', key: 'enable_tls' },
      ];
    case 'greptime':
      return [
        { label: 'Server Address', key: 'server_addr' },
        { label: 'Database', key: 'database' },
        { label: 'User', key: 'user' },
        { label: 'Password', key: 'password' },
        { label: 'Precision', key: 'precision' },
      ];
    case 'postgres':
      return [
        { label: 'Host', key: 'host' },
        { label: 'Port', key: 'port' },
        { label: 'Database', key: 'database' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Table', key: 'table' },
        { label: 'Pool Size', key: 'pool_size' },
        { label: 'Enable Batch Insert', key: 'enable_batch_insert' },
        { label: 'Enable Upsert', key: 'enable_upsert' },
        { label: 'Conflict Columns', key: 'conflict_columns' },
      ];
    case 'mysql':
      return [
        { label: 'Host', key: 'host' },
        { label: 'Port', key: 'port' },
        { label: 'Database', key: 'database' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Table', key: 'table' },
        { label: 'Pool Size', key: 'pool_size' },
        { label: 'Enable Batch Insert', key: 'enable_batch_insert' },
        { label: 'Enable Upsert', key: 'enable_upsert' },
        { label: 'Conflict Columns', key: 'conflict_columns' },
      ];
    case 'mongodb':
      return [
        { label: 'Host', key: 'host' },
        { label: 'Port', key: 'port' },
        { label: 'Database', key: 'database' },
        { label: 'Collection', key: 'collection' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Auth Source', key: 'auth_source' },
        { label: 'Deployment Mode', key: 'deployment_mode' },
        { label: 'Enable TLS', key: 'enable_tls' },
        { label: 'Max Pool Size', key: 'max_pool_size' },
        { label: 'Min Pool Size', key: 'min_pool_size' },
      ];
    case 'elasticsearch':
      return [
        { label: 'URL', key: 'url' },
        { label: 'Index', key: 'index' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Enable TLS', key: 'enable_tls' },
        { label: 'API Key', key: 'api_key' },
        { label: 'Cloud ID', key: 'cloud_id' },
      ];
    case 'file':
      return [{ label: 'Local File Path', key: 'local_file_path' }];
    default:
      return [];
  }
};

export default function ConnectorDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  // 从路由 state 中获取 connector 数据
  const connectorData = (location.state as any)?.connectorData as ConnectorRaw | undefined;

  // 获取 Connector Send Success 数据
  const { data: connectorSuccessData } = useQuery({
    queryKey: ['connectorMonitorData', 'connector_send_success_total', connectorData?.connector_name],
    queryFn: () =>
      getMonitorData('connector_send_success_total', undefined, undefined, undefined, connectorData?.connector_name),
    enabled: !!connectorData?.connector_name,
  });

  // 获取 Connector Send Failure 数据
  const { data: connectorFailureData } = useQuery({
    queryKey: ['connectorMonitorData', 'connector_send_failure_total', connectorData?.connector_name],
    queryFn: () =>
      getMonitorData('connector_send_failure_total', undefined, undefined, undefined, connectorData?.connector_name),
    enabled: !!connectorData?.connector_name,
  });

  // 获取 Connector Detail 运行时状态
  const { data: connectorDetailData, isLoading: isDetailLoading } = useQuery({
    queryKey: ['connectorDetail', connectorData?.connector_name],
    queryFn: () =>
      getConnectorDetail({
        connector_name: connectorData?.connector_name || '',
      }),
    enabled: !!connectorData?.connector_name,
    refetchInterval: 5000, // 每5秒刷新一次
  });

  if (!connectorData) {
    return (
      <CommonLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Connector Not Found</h3>
            <p className="text-muted-foreground mb-4">
              Unable to load connector details. Please try again from the connector list.
            </p>
            <Button onClick={() => navigate({ to: '/data-integration/connector' })}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Connector List
            </Button>
          </div>
        </div>
      </CommonLayout>
    );
  }

  const TypeIcon = getConnectorTypeIcon(connectorData.connector_type || '');
  const statusInfo = getStatusInfo(connectorData.status || '');
  const StatusIcon = statusInfo.icon;
  const configData = formatConfig(connectorData.config || '{}');
  const configFields = getConfigFields(connectorData.connector_type || '');

  return (
    <CommonLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate({ to: '/data-integration/connector' })}
            className="h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <Plug className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{connectorData.connector_name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="default" className={getConnectorTypeBadgeStyle(connectorData.connector_type || '')}>
                    <TypeIcon className="mr-1 h-3 w-3" />
                    {CONNECTOR_TYPE_MAP[
                      connectorData.connector_type?.toLowerCase() as keyof typeof CONNECTOR_TYPE_MAP
                    ] || connectorData.connector_type}
                  </Badge>
                  <Badge variant="default" className={statusInfo.className}>
                    <StatusIcon className="mr-1 h-3 w-3" />
                    {connectorData.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Information Panel */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-purple-600" />
            <span>Basic Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* Connector Name */}
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex-shrink-0 mt-1">
                <Plug className="h-4 w-4 text-purple-500" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Connector Name
                </label>
                <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                  {connectorData.connector_name}
                </div>
              </div>
            </div>

            {/* Connector Type */}
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex-shrink-0 mt-1">
                <TypeIcon className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Connector Type
                </label>
                <div className="mt-1">
                  <Badge variant="default" className={getConnectorTypeBadgeStyle(connectorData.connector_type || '')}>
                    <TypeIcon className="mr-1 h-3 w-3" />
                    {CONNECTOR_TYPE_MAP[
                      connectorData.connector_type?.toLowerCase() as keyof typeof CONNECTOR_TYPE_MAP
                    ] || connectorData.connector_type}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex-shrink-0 mt-1">
                <Activity className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Status
                </label>
                <div className="mt-1">
                  <Badge variant="default" className={statusInfo.className}>
                    <StatusIcon className="mr-1 h-3 w-3" />
                    {connectorData.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Topic Name */}
            {connectorData.topic_name && (
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Tag className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Topic Name
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {connectorData.topic_name}
                  </div>
                </div>
              </div>
            )}

            {/* Broker ID */}
            {connectorData.broker_id && (
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Server className="h-4 w-4 text-indigo-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Broker ID
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {connectorData.broker_id}
                  </div>
                </div>
              </div>
            )}

            {/* Create Time */}
            {connectorData.create_time && (
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Created At
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {connectorData.create_time}
                  </div>
                </div>
              </div>
            )}

            {/* Update Time */}
            {connectorData.update_time && (
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Updated At
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {connectorData.update_time}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Data Statistics Charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
        <SimpleLineChart title="Send Success (Count/Sec)" data={connectorSuccessData || []} color="green" />
        <SimpleLineChart title="Send Failure (Count/Sec)" data={connectorFailureData || []} color="orange" />
      </div>

      {/* Runtime Status Panel */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-600" />
            <span>Runtime Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isDetailLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-600 border-t-transparent" />
                <span>Loading runtime status...</span>
              </div>
            </div>
          ) : connectorDetailData ? (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {/* Last Send Time */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Last Send Time
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {connectorDetailData.last_send_time
                      ? new Date(connectorDetailData.last_send_time * 1000).toLocaleString('zh-CN', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit',
                        })
                      : '-'}
                  </div>
                </div>
              </div>

              {/* Send Success Total */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wide">
                    Send Success Total
                  </label>
                  <div className="mt-1 text-sm font-mono font-bold break-all text-green-900 dark:text-green-100">
                    {connectorDetailData.send_success_total?.toLocaleString() || '0'}
                  </div>
                </div>
              </div>

              {/* Send Fail Total */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                <div className="flex-shrink-0 mt-1">
                  <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                    Send Fail Total
                  </label>
                  <div className="mt-1 text-sm font-mono font-bold break-all text-red-900 dark:text-red-100">
                    {connectorDetailData.send_fail_total?.toLocaleString() || '0'}
                  </div>
                </div>
              </div>

              {/* Last Message */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Last Message
                  </label>
                  <div className="mt-1 text-sm break-all text-gray-900 dark:text-gray-100">
                    {connectorDetailData.last_msg || '-'}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Activity className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No runtime status available. The connector may not be running.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configuration Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-blue-600" />
            <span>{connectorData.connector_type} Configuration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {(() => {
            // 如果有预定义的配置字段，使用预定义的
            const fieldsToDisplay =
              configFields.length > 0
                ? configFields
                : // 否则，从 configData 中自动提取所有字段
                  Object.keys(configData).map(key => ({
                    label: key
                      .split('_')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' '),
                    key: key,
                  }));

            if (fieldsToDisplay.length === 0) {
              return (
                <div className="text-center py-8">
                  <Settings className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No configuration data available.</p>
                </div>
              );
            }

            return (
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {fieldsToDisplay.map(field => {
                  const value = configData[field.key];
                  const isSensitive =
                    field.key.toLowerCase().includes('password') || field.key.toLowerCase().includes('token');
                  const displayValue = value
                    ? isSensitive
                      ? '••••••••'
                      : typeof value === 'object'
                        ? JSON.stringify(value)
                        : String(value)
                    : '-';

                  return (
                    <div
                      key={field.key}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Hash className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                          {displayValue}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </CardContent>
      </Card>
    </CommonLayout>
  );
}
