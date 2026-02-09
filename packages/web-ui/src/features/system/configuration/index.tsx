import { useQuery } from '@tanstack/react-query';
import { CommonLayout } from '@/components/layout/common-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Settings,
  Server,
  Wifi,
  Database,
  BarChart3,
  Shield,
  Zap,
  HardDrive,
  Clock,
  Lock,
  Eye,
  Activity,
  FileText,
  Key,
  AlertTriangle,
  Gauge,
  Cpu,
  MonitorSpeaker,
} from 'lucide-react';
import { getClusterConfig, ClusterConfig } from '@/services/mqtt';
import { Skeleton } from '@/components/ui/skeleton';

// 统一的配置项显示组件
function ConfigItem({
  label,
  value,
  title,
  mono = true,
}: {
  label: string;
  value: string | number;
  title?: string;
  mono?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
        {label}
      </label>
      <div
        className={`p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm ${mono ? 'font-mono' : ''} ${title ? 'truncate' : ''}`}
        title={title}
      >
        {value}
      </div>
    </div>
  );
}

// 布尔值配置项
function BooleanItem({ label, value }: { label: string; value?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
        {label}
      </label>
      <div className="mt-1">
        <Badge
          variant={value ? 'default' : 'secondary'}
          className={
            value
              ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
              : 'bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600'
          }
        >
          {value ? 'Enabled' : 'Disabled'}
        </Badge>
      </div>
    </div>
  );
}

export default function Configuration() {
  const {
    data: config,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cluster-config'],
    queryFn: getClusterConfig,
  });

  if (isLoading) {
    return (
      <CommonLayout>
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-purple-600">Cluster Configuration</h2>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </CommonLayout>
    );
  }

  if (error) {
    return (
      <CommonLayout>
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-purple-600">Cluster Configuration</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-red-600">
              Failed to load configuration. Please check the server connection.
            </div>
          </CardContent>
        </Card>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 shadow-lg">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Cluster Configuration</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              View and manage cluster configuration settings
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="cluster" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-gray-100 dark:bg-gray-900">
          <TabsTrigger
            value="cluster"
            className="flex items-center space-x-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm py-3"
          >
            <Server className="h-4 w-4" />
            <span className="font-medium">Cluster</span>
          </TabsTrigger>
          <TabsTrigger
            value="meta"
            className="flex items-center space-x-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm py-3"
          >
            <Database className="h-4 w-4" />
            <span className="font-medium">Meta</span>
          </TabsTrigger>
          <TabsTrigger
            value="mqtt"
            className="flex items-center space-x-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm py-3"
          >
            <Zap className="h-4 w-4" />
            <span className="font-medium">MQTT</span>
          </TabsTrigger>
          <TabsTrigger
            value="storage"
            className="flex items-center space-x-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm py-3"
          >
            <HardDrive className="h-4 w-4" />
            <span className="font-medium">Storage Engine</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cluster" className="space-y-4">
          <ClusterConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="meta" className="space-y-4">
          <MetaConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="mqtt" className="space-y-4">
          <MqttConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <StorageEnginePanel config={config} />
        </TabsContent>
      </Tabs>
    </CommonLayout>
  );
}

// ==================== Cluster Tab ====================
function ClusterConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="space-y-6">
      {/* Cluster Information + Network - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-purple-200 dark:border-purple-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span>Cluster Information</span>
            </CardTitle>
            <CardDescription>Basic cluster identification and node configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem label="Cluster Name" value={config.cluster_name} />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Broker ID" value={config.broker_id} />
              <ConfigItem label="Broker IP" value={config.broker_ip || '-'} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Roles
              </label>
              <div className="flex flex-wrap gap-2">
                {config.roles.map((role, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-300 dark:from-purple-950 dark:to-indigo-950 dark:text-purple-300 dark:border-purple-700 px-3 py-1"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="GRPC Port" value={config.grpc_port} />
              <ConfigItem label="HTTP Port" value={config.http_port} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 dark:border-blue-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Wifi className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span>Network Configuration</span>
            </CardTitle>
            <CardDescription>Network threading and connection settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <ConfigItem label="Accept Threads" value={config.network?.accept_thread_num ?? '-'} />
              <ConfigItem label="Handler Threads" value={config.network?.handler_thread_num ?? '-'} />
              <ConfigItem label="Response Threads" value={config.network?.response_thread_num ?? '-'} />
            </div>
            <ConfigItem
              label="Queue Size"
              value={config.network?.queue_size?.toLocaleString() ?? '-'}
            />
            <Separator className="my-2" />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Lock Max Try Times" value={config.network?.lock_max_try_mut_times ?? '-'} />
              <ConfigItem label="Lock Sleep (ms)" value={config.network?.lock_try_mut_sleep_time_ms ?? '-'} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Runtime + Log - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Cpu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <span>Runtime</span>
            </CardTitle>
            <CardDescription>Runtime threading and TLS configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem label="Worker Threads" value={config.runtime?.runtime_worker_threads ?? '-'} />
            <ConfigItem
              label="TLS Certificate"
              value={config.runtime?.tls_cert || 'Not configured'}
              title={config.runtime?.tls_cert}
            />
            <ConfigItem
              label="TLS Key"
              value={config.runtime?.tls_key || 'Not configured'}
              title={config.runtime?.tls_key}
            />
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <span>Log Configuration</span>
            </CardTitle>
            <CardDescription>System logging settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem
              label="Log Config"
              value={config.log?.log_config || 'Not configured'}
              title={config.log?.log_config}
            />
            <ConfigItem
              label="Log Path"
              value={config.log?.log_path || 'Not configured'}
              title={config.log?.log_path}
            />
          </CardContent>
        </Card>
      </div>

      {/* Prometheus + PProf + RocksDB - three columns */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-green-200 dark:border-green-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-base">
              <div className="p-1.5 rounded-lg bg-green-100 dark:bg-green-900">
                <BarChart3 className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span>Prometheus</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Status" value={config.prometheus?.enable} />
            <ConfigItem label="Port" value={config.prometheus?.port ?? '-'} />
          </CardContent>
        </Card>

        <Card className="border-orange-200 dark:border-orange-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-base">
              <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-900">
                <Activity className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
              <span>PProf</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Status" value={config.p_prof?.enable} />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Port" value={config.p_prof?.port ?? '-'} />
              <ConfigItem label="Frequency" value={config.p_prof?.frequency ?? '-'} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-indigo-200 dark:border-indigo-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-base">
              <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                <Database className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span>RocksDB</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem
              label="Data Path"
              value={config.rocksdb?.data_path || 'Not configured'}
              title={config.rocksdb?.data_path}
            />
            <ConfigItem
              label="Max Open Files"
              value={config.rocksdb?.max_open_files?.toLocaleString() ?? '-'}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ==================== Meta Tab ====================
function MetaConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-purple-200 dark:border-purple-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span>Meta Addresses</span>
            </CardTitle>
            <CardDescription>Meta service node addresses and endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {config.meta_addrs &&
                Object.entries(config.meta_addrs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                      Node {key}
                    </span>
                    <span className="text-sm font-mono text-gray-900 dark:text-gray-100">{value}</span>
                  </div>
                ))}
              {(!config.meta_addrs || Object.keys(config.meta_addrs).length === 0) && (
                <div className="text-center py-6 text-muted-foreground text-sm">No meta addresses configured</div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 dark:border-blue-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span>Meta Runtime</span>
            </CardTitle>
            <CardDescription>Meta service heartbeat and runtime configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem
              label="Heartbeat Timeout"
              value={config.meta_runtime?.heartbeat_timeout_ms ? `${config.meta_runtime.heartbeat_timeout_ms} ms` : '-'}
            />
            <ConfigItem
              label="Heartbeat Check Time"
              value={
                config.meta_runtime?.heartbeat_check_time_ms
                  ? `${config.meta_runtime.heartbeat_check_time_ms} ms`
                  : '-'
              }
            />
            <ConfigItem
              label="Raft Write Timeout"
              value={
                config.meta_runtime?.raft_write_timeout_sec
                  ? `${config.meta_runtime.raft_write_timeout_sec} sec`
                  : '-'
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ==================== MQTT Tab ====================
function MqttConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  const authnConfig = config.mqtt_auth_config?.authn_config;
  const passwordBasedConfig = authnConfig?.password_based_config;
  const authzConfig = config.mqtt_auth_config?.authz_config;

  return (
    <div className="space-y-6">
      {/* MQTT Server + Keep Alive - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-cyan-200 dark:border-cyan-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <span>MQTT Server</span>
            </CardTitle>
            <CardDescription>MQTT server listening ports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="TCP Port" value={config.mqtt_server?.tcp_port ?? '-'} />
              <ConfigItem label="TLS Port" value={config.mqtt_server?.tls_port ?? '-'} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="WebSocket Port" value={config.mqtt_server?.websocket_port ?? '-'} />
              <ConfigItem label="WebSockets Port" value={config.mqtt_server?.websockets_port ?? '-'} />
            </div>
            <ConfigItem label="QUIC Port" value={config.mqtt_server?.quic_port ?? '-'} />
          </CardContent>
        </Card>

        <Card className="border-green-200 dark:border-green-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <span>Keep Alive</span>
            </CardTitle>
            <CardDescription>MQTT keep alive timeout settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Enable" value={config.mqtt_keep_alive?.enable} />
            <div className="grid grid-cols-3 gap-4">
              <ConfigItem
                label="Default Time"
                value={config.mqtt_keep_alive?.default_time ? `${config.mqtt_keep_alive.default_time}s` : '-'}
              />
              <ConfigItem
                label="Max Time"
                value={config.mqtt_keep_alive?.max_time ? `${config.mqtt_keep_alive.max_time}s` : '-'}
              />
              <ConfigItem
                label="Default Timeout"
                value={config.mqtt_keep_alive?.default_timeout ? `${config.mqtt_keep_alive.default_timeout}s` : '-'}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Runtime + Security - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-purple-200 dark:border-purple-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span>MQTT Runtime</span>
            </CardTitle>
            <CardDescription>MQTT runtime and connection settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Default User" value={config.mqtt_runtime?.default_user || '-'} />
              <ConfigItem label="Default Password" value="••••••••" />
            </div>
            <ConfigItem
              label="Max Connections"
              value={config.mqtt_runtime?.max_connection_num?.toLocaleString() ?? '-'}
            />
            <BooleanItem label="Durable Sessions" value={config.mqtt_runtime?.durable_sessions_enable} />
          </CardContent>
        </Card>

        <Card className="border-red-200 dark:border-red-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <span>MQTT Security</span>
            </CardTitle>
            <CardDescription>MQTT security and authentication settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Self Protection" value={config.mqtt_security?.is_self_protection_status} />
            <BooleanItem label="Secret Free Login" value={config.mqtt_security?.secret_free_login} />
          </CardContent>
        </Card>
      </div>

      {/* Protocol Config - full width */}
      <Card className="border-blue-200 dark:border-blue-800 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
              <Gauge className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span>Protocol Configuration</span>
          </CardTitle>
          <CardDescription>MQTT protocol limits and session configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ConfigItem
              label="Max Packet Size"
              value={
                config.mqtt_protocol_config?.max_packet_size
                  ? `${(config.mqtt_protocol_config.max_packet_size / 1024 / 1024).toFixed(1)} MB`
                  : '-'
              }
            />
            <ConfigItem
              label="Max QoS Flight Msg"
              value={config.mqtt_protocol_config?.max_qos_flight_message ?? '-'}
            />
            <ConfigItem
              label="Topic Alias Max"
              value={config.mqtt_protocol_config?.topic_alias_max?.toLocaleString() ?? '-'}
            />
            <ConfigItem
              label="Receive Max"
              value={config.mqtt_protocol_config?.receive_max?.toLocaleString() ?? '-'}
            />
          </div>
          <Separator className="my-2" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ConfigItem
              label="Default Session Expiry"
              value={
                config.mqtt_protocol_config?.default_session_expiry_interval
                  ? `${config.mqtt_protocol_config.default_session_expiry_interval}s`
                  : '-'
              }
            />
            <ConfigItem
              label="Max Session Expiry"
              value={
                config.mqtt_protocol_config?.max_session_expiry_interval
                  ? `${config.mqtt_protocol_config.max_session_expiry_interval}s`
                  : '-'
              }
            />
            <ConfigItem
              label="Max Message Expiry"
              value={
                config.mqtt_protocol_config?.max_message_expiry_interval
                  ? `${config.mqtt_protocol_config.max_message_expiry_interval}s`
                  : '-'
              }
            />
            <BooleanItem label="Client PKID Persistent" value={config.mqtt_protocol_config?.client_pkid_persistent} />
          </div>
        </CardContent>
      </Card>

      {/* Authentication Config - full width */}
      <Card className="border-amber-200 dark:border-amber-800 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
              <Key className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <span>Authentication Configuration</span>
          </CardTitle>
          <CardDescription>MQTT authentication and authorization configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AuthN */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-amber-500" />
              Authentication (AuthN)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pl-6 border-l-2 border-amber-200 dark:border-amber-800">
              <ConfigItem label="AuthN Type" value={authnConfig?.authn_type || '-'} />
              <ConfigItem label="JWT Config" value={authnConfig?.jwt_config ? 'Configured' : 'Not configured'} />
              {passwordBasedConfig && (
                <>
                  <ConfigItem
                    label="Storage Type"
                    value={passwordBasedConfig.storage_config?.storage_type || '-'}
                  />
                  <ConfigItem
                    label="Credential Type"
                    value={passwordBasedConfig.password_config?.credential_type || '-'}
                  />
                  <ConfigItem
                    label="Algorithm"
                    value={passwordBasedConfig.password_config?.algorithm || '-'}
                  />
                  <ConfigItem
                    label="Salt Position"
                    value={passwordBasedConfig.password_config?.salt_position || '-'}
                  />
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* AuthZ */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4 text-amber-500" />
              Authorization (AuthZ)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pl-6 border-l-2 border-amber-200 dark:border-amber-800">
              <ConfigItem
                label="Storage Type"
                value={authzConfig?.storage_config?.storage_type || '-'}
              />
              <ConfigItem
                label="Placement Config"
                value={
                  authzConfig?.storage_config?.placement_config
                    ? authzConfig.storage_config.placement_config.journal_addr || 'Default'
                    : 'Not configured'
                }
              />
              <ConfigItem
                label="MySQL Config"
                value={authzConfig?.storage_config?.mysql_config ? 'Configured' : 'Not configured'}
              />
              <ConfigItem
                label="PostgreSQL Config"
                value={authzConfig?.storage_config?.postgres_config ? 'Configured' : 'Not configured'}
              />
              <ConfigItem
                label="Redis Config"
                value={authzConfig?.storage_config?.redis_config ? 'Configured' : 'Not configured'}
              />
              <ConfigItem
                label="HTTP Config"
                value={authzConfig?.storage_config?.http_config ? 'Configured' : 'Not configured'}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Offline Message + Schema - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <BarChart3 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <span>Offline Message</span>
            </CardTitle>
            <CardDescription>MQTT offline message configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Enable" value={config.mqtt_offline_message?.enable} />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem
                label="Expire Time"
                value={
                  config.mqtt_offline_message?.expire_ms
                    ? `${(config.mqtt_offline_message.expire_ms / 1000 / 60).toFixed(0)} min`
                    : '-'
                }
              />
              <ConfigItem
                label="Max Messages"
                value={config.mqtt_offline_message?.max_messages_num?.toLocaleString() ?? '-'}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-indigo-200 dark:border-indigo-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span>Schema</span>
            </CardTitle>
            <CardDescription>MQTT schema validation configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Enable" value={config.mqtt_schema?.enable} />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Strategy" value={config.mqtt_schema?.strategy || '-'} />
              <ConfigItem label="Failed Operation" value={config.mqtt_schema?.failed_operation || '-'} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <BooleanItem label="Echo Log" value={config.mqtt_schema?.echo_log} />
              <ConfigItem label="Log Level" value={config.mqtt_schema?.log_level || '-'} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Slow Subscribe + Flapping Detect - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-orange-200 dark:border-orange-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <span>Slow Subscribe</span>
            </CardTitle>
            <CardDescription>MQTT slow subscription detection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Enable" value={config.mqtt_slow_subscribe_config?.enable} />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem
                label="Record Time"
                value={
                  config.mqtt_slow_subscribe_config?.record_time
                    ? `${config.mqtt_slow_subscribe_config.record_time} ms`
                    : '-'
                }
              />
              <ConfigItem
                label="Delay Type"
                value={config.mqtt_slow_subscribe_config?.delay_type || '-'}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 dark:border-red-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <span>Flapping Detect</span>
            </CardTitle>
            <CardDescription>MQTT connection flapping detection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BooleanItem label="Enable" value={config.mqtt_flapping_detect?.enable} />
            <div className="grid grid-cols-3 gap-4">
              <ConfigItem
                label="Window Time"
                value={
                  config.mqtt_flapping_detect?.window_time
                    ? `${config.mqtt_flapping_detect.window_time}s`
                    : '-'
                }
              />
              <ConfigItem
                label="Max Connections"
                value={config.mqtt_flapping_detect?.max_client_connections ?? '-'}
              />
              <ConfigItem
                label="Ban Time"
                value={
                  config.mqtt_flapping_detect?.ban_time
                    ? `${config.mqtt_flapping_detect.ban_time}s`
                    : '-'
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Monitor - full width */}
      <Card className="border-teal-200 dark:border-teal-800 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
              <MonitorSpeaker className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <span>System Monitor</span>
          </CardTitle>
          <CardDescription>MQTT system monitoring configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <BooleanItem label="Enable" value={config.mqtt_system_monitor?.enable} />
            <ConfigItem
              label="CPU High Watermark"
              value={
                config.mqtt_system_monitor?.os_cpu_high_watermark != null
                  ? `${config.mqtt_system_monitor.os_cpu_high_watermark}%`
                  : '-'
              }
            />
            <ConfigItem
              label="Memory High Watermark"
              value={
                config.mqtt_system_monitor?.os_memory_high_watermark != null
                  ? `${config.mqtt_system_monitor.os_memory_high_watermark}%`
                  : '-'
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ==================== Storage Engine Tab ====================
function StorageEnginePanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  const msgStorage = config.message_storage;
  const storageRuntime = config.storage_runtime;

  // 收集 message_storage 中非 null 的引擎配置
  const engineConfigs: { label: string; value: any }[] = [];
  if (msgStorage) {
    if (msgStorage.engine_config) engineConfigs.push({ label: 'Engine Config', value: msgStorage.engine_config });
    if (msgStorage.memory_config) engineConfigs.push({ label: 'Memory Config', value: msgStorage.memory_config });
    if (msgStorage.minio_config) engineConfigs.push({ label: 'MinIO Config', value: msgStorage.minio_config });
    if (msgStorage.mysql_config) engineConfigs.push({ label: 'MySQL Config', value: msgStorage.mysql_config });
    if (msgStorage.rocksdb_config) engineConfigs.push({ label: 'RocksDB Config', value: msgStorage.rocksdb_config });
    if (msgStorage.s3_config) engineConfigs.push({ label: 'S3 Config', value: msgStorage.s3_config });
  }

  return (
    <div className="space-y-6">
      {/* Message Storage + Storage Offset - side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-purple-200 dark:border-purple-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <HardDrive className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span>Message Storage</span>
            </CardTitle>
            <CardDescription>Message storage engine type and configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem label="Storage Type" value={msgStorage?.storage_type || '-'} />

            {engineConfigs.length > 0 ? (
              <div className="space-y-3">
                <Separator />
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Active Engine Configurations
                </label>
                {engineConfigs.map((ec) => (
                  <div
                    key={ec.label}
                    className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase mb-1">
                      {ec.label}
                    </div>
                    <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-all">
                      {typeof ec.value === 'object' ? JSON.stringify(ec.value, null, 2) : String(ec.value)}
                    </pre>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <Separator />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Engine', 'Memory', 'MinIO', 'MySQL', 'RocksDB', 'S3'].map((name) => (
                    <div
                      key={name}
                      className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-center"
                    >
                      <span className="text-xs text-gray-400 dark:text-gray-500">{name}</span>
                      <div className="text-xs text-gray-400 mt-0.5">Not configured</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-green-200 dark:border-green-800 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                  <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <span>Storage Offset</span>
              </CardTitle>
              <CardDescription>Storage offset cache settings</CardDescription>
            </CardHeader>
            <CardContent>
              <BooleanItem label="Enable Cache" value={config.storage_offset?.enable_cache} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Storage Runtime - full width */}
      <Card className="border-blue-200 dark:border-blue-800 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
              <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span>Storage Runtime</span>
          </CardTitle>
          <CardDescription>Storage engine runtime configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <ConfigItem label="TCP Port" value={storageRuntime?.tcp_port ?? '-'} />
            <ConfigItem
              label="Max Segment Size"
              value={
                storageRuntime?.max_segment_size
                  ? `${(storageRuntime.max_segment_size / 1024 / 1024 / 1024).toFixed(1)} GB`
                  : '-'
              }
            />
            <ConfigItem label="IO Thread Num" value={storageRuntime?.io_thread_num ?? '-'} />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Data Paths
            </label>
            <div className="space-y-2">
              {storageRuntime?.data_path?.map((path, index) => (
                <div
                  key={index}
                  className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-mono"
                  title={path}
                >
                  {path}
                </div>
              )) || <div className="text-sm text-muted-foreground">No data paths configured</div>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
