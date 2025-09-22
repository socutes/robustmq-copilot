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

      <Tabs defaultValue="base" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="base" className="flex items-center space-x-2">
            <Server className="h-4 w-4" />
            <span>Base</span>
          </TabsTrigger>
          <TabsTrigger value="network" className="flex items-center space-x-2">
            <Wifi className="h-4 w-4" />
            <span>Network</span>
          </TabsTrigger>
          <TabsTrigger value="mqtt" className="flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>MQTT</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center space-x-2">
            <Database className="h-4 w-4" />
            <span>Storage</span>
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Monitoring</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="base" className="space-y-4">
          <BaseConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <NetworkConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="mqtt" className="space-y-4">
          <MqttConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <StorageConfigPanel config={config} />
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <MonitoringConfigPanel config={config} />
        </TabsContent>
      </Tabs>
    </CommonLayout>
  );
}

// 基础配置面板
function BaseConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="h-5 w-5" />
            <span>Cluster Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Cluster Name</label>
            <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">{config.cluster_name}</div>
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
            <Settings className="h-5 w-5" />
            <span>Runtime Configuration</span>
          </CardTitle>
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
    </div>
  );
}

// 网络配置面板
function NetworkConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wifi className="h-5 w-5" />
          <span>Network Configuration</span>
        </CardTitle>
        <CardDescription>Network threading and connection settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
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
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lock Sleep Time (ms)</label>
            <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
              {config.network.lock_try_mut_sleep_time_ms}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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
            <span>MQTT Server Ports</span>
          </CardTitle>
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
            <Shield className="h-5 w-5" />
            <span>MQTT Security & Protocol</span>
          </CardTitle>
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
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max QoS</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.max_qos}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max Packet Size</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_protocol_config.max_packet_size.toLocaleString()} bytes
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
            <span>Storage Configuration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Auth Storage Type</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_auth_storage.storage_type}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message Storage Type</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.mqtt_message_storage.storage_type}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">RocksDB Data Path</label>
              <div
                className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono truncate"
                title={config.rocksdb.data_path}
              >
                {config.rocksdb.data_path}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">RocksDB Max Open Files</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {config.rocksdb.max_open_files.toLocaleString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 监控配置面板
function MonitoringConfigPanel({ config }: { config?: ClusterConfig }) {
  if (!config) return null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>System Monitoring</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">System Monitor</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_system_monitor.enable ? 'default' : 'secondary'}>
                  {config.mqtt_system_monitor.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Prometheus</label>
              <div className="mt-1">
                <Badge variant={config.prometheus.enable ? 'default' : 'secondary'}>
                  {config.prometheus.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">CPU High Watermark</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {(config.mqtt_system_monitor.os_cpu_high_watermark * 100).toFixed(1)}%
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Memory High Watermark</label>
              <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
                {(config.mqtt_system_monitor.os_memory_high_watermark * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Slow Subscribe</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_slow_subscribe_config.enable ? 'default' : 'secondary'}>
                  {config.mqtt_slow_subscribe_config.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Flapping Detect</label>
              <div className="mt-1">
                <Badge variant={config.mqtt_flapping_detect.enable ? 'default' : 'secondary'}>
                  {config.mqtt_flapping_detect.enable ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
