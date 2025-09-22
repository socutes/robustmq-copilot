import { useQuery } from '@tanstack/react-query';
import { CommonLayout } from '@/components/layout/common-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Server, Wifi, Database, BarChart3, Shield, Zap } from 'lucide-react';
import { getClusterConfig, ClusterConfig } from '@/services/mqtt';
import { Skeleton } from '@/components/ui/skeleton';

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
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-purple-600">Cluster Configuration</h2>
        </div>
      </div>

      <Tabs defaultValue="cluster" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="cluster" className="flex items-center space-x-2">
            <Server className="h-4 w-4" />
            <span>Cluster</span>
          </TabsTrigger>
          <TabsTrigger value="meta" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Meta</span>
          </TabsTrigger>
          <TabsTrigger value="mqtt" className="flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>MQTT</span>
          </TabsTrigger>
          <TabsTrigger value="journal" className="flex items-center space-x-2">
            <Database className="h-4 w-4" />
            <span>Journal</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center space-x-2">
            <Database className="h-4 w-4" />
            <span>Storage</span>
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
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Server className="h-5 w-5" />
              <span>Cluster Information</span>
            </CardTitle>
            <CardDescription>Basic cluster identification and node configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Cluster Name</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.cluster_name}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Broker ID</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">{config.broker_id}</div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Roles</label>
              <div className="mt-1 flex flex-wrap gap-1">
                {config.roles.map((role, index) => (
                  <Badge key={index} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">GRPC Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">{config.grpc_port}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wifi className="h-5 w-5" />
              <span>Network Configuration</span>
            </CardTitle>
            <CardDescription>Network threading and connection settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Accept Threads</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.network.accept_thread_num}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Handler Threads</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.network.handler_thread_num}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Response Threads</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.network.response_thread_num}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Queue Size</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.network.queue_size.toLocaleString()}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lock Max Try Times</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.network.lock_max_try_mut_times}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lock Sleep Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.network.lock_try_mut_sleep_time_ms}ms
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Runtime Configuration</span>
            </CardTitle>
            <CardDescription>Runtime worker threads and TLS configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Worker Threads</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.runtime.runtime_worker_threads}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TLS Certificate</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.runtime.tls_cert}
              >
                {config.runtime.tls_cert || 'Not configured'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TLS Key</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.runtime.tls_key}
              >
                {config.runtime.tls_key || 'Not configured'}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Prometheus Configuration</span>
            </CardTitle>
            <CardDescription>Prometheus metrics collection settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Prometheus</label>
              <div className="mt-1">
                <Badge variant={config.prometheus.enable ? 'default' : 'secondary'}>
                  {config.prometheus.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Prometheus Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.prometheus.port}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>PProf Configuration</span>
            </CardTitle>
            <CardDescription>Performance profiling and debugging settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">PProf</label>
              <div className="mt-1">
                <Badge variant={config.p_prof.enable ? 'default' : 'secondary'}>
                  {config.p_prof.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">PProf Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">{config.p_prof.port}</div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">PProf Frequency</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.p_prof.frequency}
              </div>
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
            {Object.entries(config.meta_addrs).map(([key, value]) => (
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
                {config.meta_runtime.heartbeat_timeout_ms}ms
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Heartbeat Check Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.meta_runtime.heartbeat_check_time_ms}ms
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
                {config.mqtt_server.tcp_port}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TLS Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server.tls_port}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">WebSocket Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server.websocket_port}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">WebSockets Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server.websockets_port}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">QUIC Port</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_server.quic_port}
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
                {config.mqtt_runtime.default_user}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Default Password</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_runtime.default_password}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Connections</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_runtime.max_connection_num.toLocaleString()}
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
                {config.mqtt_protocol_config.max_qos}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Packet Size</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {(config.mqtt_protocol_config.max_packet_size / 1024 / 1024).toFixed(1)} MB
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Keep Alive (Default)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.default_server_keep_alive}s
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Keep Alive (Max)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.max_server_keep_alive}s
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Session Expiry (Default)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.default_session_expiry_interval}s
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Session Expiry (Max)</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.max_session_expiry_interval}s
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Topic Alias Max</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.topic_alias_max.toLocaleString()}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Receive Max</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.receive_max.toLocaleString()}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message Expiry Max</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.max_message_expiry_interval}s
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
                <Badge variant={config.mqtt_security.is_self_protection_status ? 'default' : 'secondary'}>
                  {config.mqtt_security.is_self_protection_status ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Secret Free Login</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_security.secret_free_login ? 'destructive' : 'default'}>
                  {config.mqtt_security.secret_free_login ? 'Enabled' : 'Disabled'}
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
                {config.mqtt_auth_storage.storage_type}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Journal Address</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_auth_storage.journal_addr || 'Not configured'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">MySQL Address</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_auth_storage.mysql_addr || 'Not configured'}
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
                {config.mqtt_message_storage.storage_type}
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
                <Badge variant={config.mqtt_offline_message.enable ? 'default' : 'secondary'}>
                  {config.mqtt_offline_message.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Messages</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_offline_message.max_messages_num.toLocaleString()}
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
                <Badge variant={config.mqtt_schema.enable ? 'default' : 'secondary'}>
                  {config.mqtt_schema.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Strategy</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_schema.strategy}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Failed Operation</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_schema.failed_operation}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Log Level</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_schema.log_level}
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
                <Badge variant={config.mqtt_slow_subscribe_config.enable ? 'default' : 'secondary'}>
                  {config.mqtt_slow_subscribe_config.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Record Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_slow_subscribe_config.record_time}ms
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
                <Badge variant={config.mqtt_flapping_detect.enable ? 'default' : 'secondary'}>
                  {config.mqtt_flapping_detect.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Window Time</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_flapping_detect.window_time}s
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
                <Badge variant={config.mqtt_system_monitor.enable ? 'default' : 'secondary'}>
                  {config.mqtt_system_monitor.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">CPU High Watermark</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_system_monitor.os_cpu_high_watermark.toFixed(1)}%
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
                {config.journal_server.tcp_port}
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
                <Badge variant={config.journal_runtime.enable_auto_create_shard ? 'default' : 'secondary'}>
                  {config.journal_runtime.enable_auto_create_shard ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Shard Replica Number</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.journal_runtime.shard_replica_num}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Segment Size</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {(config.journal_runtime.max_segment_size / 1024 / 1024 / 1024).toFixed(1)} GB
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
                {config.journal_storage.data_path.map((path, index) => (
                  <div key={index} className="p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                    {path}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">RocksDB Max Open Files</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.journal_storage.rocksdb_max_open_files.toLocaleString()}
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
                title={config.rocksdb.data_path}
              >
                {config.rocksdb.data_path}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Open Files</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.rocksdb.max_open_files.toLocaleString()}
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
                title={config.log.log_config}
              >
                {config.log.log_config || 'Not configured'}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Log Path</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.log.log_path}
              >
                {config.log.log_path}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
