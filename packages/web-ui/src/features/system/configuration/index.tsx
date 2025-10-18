import { useQuery } from '@tanstack/react-query';
import { CommonLayout } from '@/components/layout/common-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Settings, Server, Wifi, Database, BarChart3, Shield, Zap, HardDrive } from 'lucide-react';
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
      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{label}</label>
      <div
        className={`p-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm ${mono ? 'font-mono' : ''} ${title ? 'truncate' : ''}`}
        title={title}
      >
        {value}
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-purple-600">Cluster Configuration</h2>
          </div>
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-purple-600">Cluster Configuration</h2>
          </div>
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
            <p className="text-sm text-gray-500 dark:text-gray-400">View and manage cluster configuration settings</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="cluster" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-gray-100 dark:bg-gray-900">
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
            <Settings className="h-4 w-4" />
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
            value="journal"
            className="flex items-center space-x-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm py-3"
          >
            <Database className="h-4 w-4" />
            <span className="font-medium">Journal</span>
          </TabsTrigger>
          <TabsTrigger
            value="storage"
            className="flex items-center space-x-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm py-3"
          >
            <HardDrive className="h-4 w-4" />
            <span className="font-medium">Storage</span>
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

        <TabsContent value="journal" className="space-y-4">
          <JournalConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <StorageConfigPanel config={config} />
        </TabsContent>
      </Tabs>
    </CommonLayout>
  );
}

// 集群配置面板
function ClusterConfigPanel({ config }: { config?: ClusterConfig }) {
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
              <span>Cluster Information</span>
            </CardTitle>
            <CardDescription>Basic cluster identification and node configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem label="Cluster Name" value={config.cluster_name} />
            <ConfigItem label="Broker ID" value={config.broker_id} />
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
            <Separator className="my-4" />
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
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Accept Threads" value={config.network?.accept_thread_num || '-'} />
              <ConfigItem label="Handler Threads" value={config.network?.handler_thread_num || '-'} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Response Threads" value={config.network?.response_thread_num || '-'} />
              <ConfigItem label="Queue Size" value={config.network?.queue_size?.toLocaleString() || '-'} />
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Lock Max Try" value={config.network?.lock_max_try_mut_times || '-'} />
              <ConfigItem label="Lock Sleep (ms)" value={config.network?.lock_try_mut_sleep_time_ms || '-'} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-base">
              <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span>Runtime</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ConfigItem label="Worker Threads" value={config.runtime?.runtime_worker_threads || '-'} />
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
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </label>
              <Badge variant={config.prometheus?.enable ? 'default' : 'secondary'} className="text-sm px-3 py-1">
                {config.prometheus?.enable ? 'Enabled' : 'Disabled'}
              </Badge>
            </div>
            <ConfigItem label="Port" value={config.prometheus?.port || '-'} />
          </CardContent>
        </Card>

        <Card className="border-orange-200 dark:border-orange-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-base">
              <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-900">
                <BarChart3 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
              <span>PProf</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </label>
              <Badge variant={config.p_prof?.enable ? 'default' : 'secondary'} className="text-sm px-3 py-1">
                {config.p_prof?.enable ? 'Enabled' : 'Disabled'}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ConfigItem label="Port" value={config.p_prof?.port || '-'} />
              <ConfigItem label="Frequency" value={config.p_prof?.frequency || '-'} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Meta 配置面板
function MetaConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>Meta Addresses</span>
          </CardTitle>
          <CardDescription>Meta service node addresses and endpoints</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {config.meta_addrs &&
              Object.entries(config.meta_addrs).map(([key, value]) => (
                <div key={key} className="p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                  Node {key}: {value}
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Meta Runtime</span>
          </CardTitle>
          <CardDescription>Meta service heartbeat and runtime configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Heartbeat Timeout</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.meta_runtime?.heartbeat_timeout_ms ? `${config.meta_runtime.heartbeat_timeout_ms}ms` : '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Heartbeat Check Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.meta_runtime?.heartbeat_check_time_ms
                  ? `${config.meta_runtime.heartbeat_check_time_ms}ms`
                  : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// MQTT配置面板
function MqttConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;
  if (!config.mqtt_server) {
    return <div className="text-center py-8 text-muted-foreground">MQTT configuration not available</div>;
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>MQTT Server</span>
          </CardTitle>
          <CardDescription>MQTT server listening ports for different protocols</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TCP Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server?.tcp_port || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TLS Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server?.tls_port || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">WebSocket Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server?.websocket_port || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">WebSockets Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server?.websockets_port || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">QUIC Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server?.quic_port || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>MQTT Runtime</span>
          </CardTitle>
          <CardDescription>MQTT runtime configuration and connection limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Default User</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_runtime?.default_user || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Default Password</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_runtime?.default_password || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Connections</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_runtime?.max_connection_num?.toLocaleString() || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>MQTT Protocol Config</span>
          </CardTitle>
          <CardDescription>MQTT protocol limits and session configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max QoS</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.max_qos ?? '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Packet Size</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.max_packet_size
                  ? `${(config.mqtt_protocol_config.max_packet_size / 1024 / 1024).toFixed(1)} MB`
                  : '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Keep Alive (Default)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.default_server_keep_alive
                  ? `${config.mqtt_protocol_config.default_server_keep_alive}s`
                  : '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Keep Alive (Max)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.max_server_keep_alive
                  ? `${config.mqtt_protocol_config.max_server_keep_alive}s`
                  : '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Session Expiry (Default)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.default_session_expiry_interval
                  ? `${config.mqtt_protocol_config.default_session_expiry_interval}s`
                  : '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Session Expiry (Max)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.max_session_expiry_interval
                  ? `${config.mqtt_protocol_config.max_session_expiry_interval}s`
                  : '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Topic Alias Max</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.topic_alias_max?.toLocaleString() || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Receive Max</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.receive_max?.toLocaleString() || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message Expiry Max</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config?.max_message_expiry_interval
                  ? `${config.mqtt_protocol_config.max_message_expiry_interval}s`
                  : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>MQTT Security</span>
          </CardTitle>
          <CardDescription>MQTT security and authentication settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Self Protection</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_security?.is_self_protection_status ? 'default' : 'secondary'}>
                  {config.mqtt_security?.is_self_protection_status ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Secret Free Login</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_security?.secret_free_login ? 'destructive' : 'default'}>
                  {config.mqtt_security?.secret_free_login ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>MQTT Authentication Storage</span>
          </CardTitle>
          <CardDescription>MQTT authentication storage configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Storage Type</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_auth_storage?.storage_type || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Journal Address</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_auth_storage?.journal_addr || 'Not configured'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">MySQL Address</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_auth_storage?.mysql_addr || 'Not configured'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>MQTT Message Storage</span>
          </CardTitle>
          <CardDescription>MQTT message storage configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-1">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Storage Type</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_message_storage?.storage_type || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>MQTT Offline Message</span>
          </CardTitle>
          <CardDescription>MQTT offline message configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_offline_message?.enable ? 'default' : 'secondary'}>
                  {config.mqtt_offline_message?.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Messages</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_offline_message?.max_messages_num?.toLocaleString() || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>MQTT Schema</span>
          </CardTitle>
          <CardDescription>MQTT schema validation configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_schema?.enable ? 'default' : 'secondary'}>
                  {config.mqtt_schema?.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Strategy</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_schema?.strategy || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Failed Operation</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_schema?.failed_operation || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Log Level</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_schema?.log_level || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>MQTT Slow Subscribe Config</span>
          </CardTitle>
          <CardDescription>MQTT slow subscription detection configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_slow_subscribe_config?.enable ? 'default' : 'secondary'}>
                  {config.mqtt_slow_subscribe_config?.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Record Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_slow_subscribe_config?.record_time
                  ? `${config.mqtt_slow_subscribe_config.record_time}ms`
                  : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>MQTT Flapping Detect</span>
          </CardTitle>
          <CardDescription>MQTT connection flapping detection configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_flapping_detect?.enable ? 'default' : 'secondary'}>
                  {config.mqtt_flapping_detect?.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Window Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_flapping_detect?.window_time ? `${config.mqtt_flapping_detect.window_time}s` : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>MQTT System Monitor</span>
          </CardTitle>
          <CardDescription>MQTT system monitoring configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_system_monitor?.enable ? 'default' : 'secondary'}>
                  {config.mqtt_system_monitor?.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">CPU High Watermark</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_system_monitor?.os_cpu_high_watermark
                  ? `${config.mqtt_system_monitor.os_cpu_high_watermark.toFixed(1)}%`
                  : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Journal 配置面板
function JournalConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>Journal Server</span>
          </CardTitle>
          <CardDescription>Journal server network configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-1">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TCP Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.journal_server?.tcp_port || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Journal Runtime</span>
          </CardTitle>
          <CardDescription>Journal runtime configuration and shard management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Auto Create Shard</label>
              <div className="mt-1">
                <Badge variant={config.journal_runtime?.enable_auto_create_shard ? 'default' : 'secondary'}>
                  {config.journal_runtime?.enable_auto_create_shard ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Shard Replica Number</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.journal_runtime?.shard_replica_num || '-'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Segment Size</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.journal_runtime?.max_segment_size
                  ? `${(config.journal_runtime.max_segment_size / 1024 / 1024 / 1024).toFixed(1)} GB`
                  : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>Journal Storage</span>
          </CardTitle>
          <CardDescription>Journal storage paths and database configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Paths</label>
              <div className="mt-1 space-y-1">
                {config.journal_storage?.data_path?.map((path, index) => (
                  <div key={index} className="p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                    {path}
                  </div>
                )) || <div className="text-sm text-muted-foreground">No data paths configured</div>}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">RocksDB Max Open Files</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.journal_storage?.rocksdb_max_open_files?.toLocaleString() || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 存储配置面板
function StorageConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>Global RocksDB</span>
          </CardTitle>
          <CardDescription>Global RocksDB configuration for the cluster</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Path</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.rocksdb?.data_path}
              >
                {config.rocksdb?.data_path || 'Not configured'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Open Files</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.rocksdb?.max_open_files?.toLocaleString() || '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Log Configuration</span>
          </CardTitle>
          <CardDescription>System logging configuration and paths</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Log Config</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.log?.log_config}
              >
                {config.log?.log_config || 'Not configured'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Log Path</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.log?.log_path}
              >
                {config.log?.log_path || 'Not configured'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
