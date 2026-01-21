import { CommonLayout } from '@/components/layout/common-layout';
import { SimpleLineChart } from './components/chart';
import { HeaderCard } from './components/card';
import { CombinedCard } from './components/combined-card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Network,
  Hash,
  Bell,
  Download,
  Upload,
  User,
  RefreshCw,
  Settings,
  Activity,
  Monitor,
  LayoutDashboard,
  Server,
  BarChart3,
  Eye,
  Plug,
} from 'lucide-react';
import { getOverviewMetricsData, getOverviewStatusData, getClusterStatus } from '@/services/mqtt';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { useState } from 'react';

export default function Dashboard() {
  const [extendInfoDialogOpen, setExtendInfoDialogOpen] = useState(false);
  const [selectedExtendInfo, setSelectedExtendInfo] = useState<string>('');
  const [replicationDialogOpen, setReplicationDialogOpen] = useState(false);
  const [selectedReplication, setSelectedReplication] = useState<any>(null);
  const [metaDetailDialogOpen, setMetaDetailDialogOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ['overview-metrics'],
    queryFn: getOverviewMetricsData,
    initialData: {
      connectionNum: [],
      topicNum: [],
      subscribeNum: [],
      messageInNum: [],
      messageOutNum: [],
      messageDropNum: [],
    },
    refetchInterval: 5000,
  });

  const { data: statusData } = useQuery({
    queryKey: ['overview-status'],
    queryFn: getOverviewStatusData,
    initialData: {
      clusterName: '',
      messageInRate: 0,
      messageOutRate: 0,
      connectionNum: 0,
      sessionNum: 0,
      topicNum: 0,
      nodesList: [],
      tcpConnectionNum: 0,
      tlsConnectionNum: 0,
      websocketConnectionNum: 0,
      quicConnectionNum: 0,
      subscribeNum: 0,
      exclusiveSubscribeNum: 0,
      shareSubscribeLeaderNum: 0,
      shareSubscribeResubNum: 0,
      exclusiveSubscribeThreadNum: 0,
      shareSubscribeLeaderThreadNum: 0,
      shareSubscribeFollowerThreadNum: 0,
      connectorNum: 0,
      connectorThreadNum: 0,
    },
    refetchInterval: 5000,
  });

  const { data: clusterData, isLoading: isClusterLoading } = useQuery({
    queryKey: ['cluster-status'],
    queryFn: getClusterStatus,
    initialData: {
      cluster_name: '',
      version: '',
      start_time: '',
      broker_node_list: [],
      meta: {
        replication: {},
      },
    },
    refetchInterval: 5000,
  });

  return (
    <CommonLayout>
      <div className="mb-4 flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Monitor className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-purple-600">Dashboard</h1>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="mb-4 w-full h-12 grid grid-cols-3 gap-2">
          <TabsTrigger
            value="overview"
            className="px-6 h-full data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300 data-[state=active]:border-purple-500"
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="cluster"
            className="px-6 h-full data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300 data-[state=active]:border-purple-500"
          >
            <Server className="mr-2 h-4 w-4" />
            Cluster
          </TabsTrigger>
          <TabsTrigger
            value="health"
            className="px-6 h-full data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300 data-[state=active]:border-purple-500"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Health
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* 第一行：基础指标 */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <HeaderCard
              title="Connection"
              value={statusData.connectionNum}
              icon={<Network className="h-4 w-4" />}
              color="blue"
            />
            <HeaderCard
              title="Session"
              value={statusData.sessionNum}
              icon={<Monitor className="h-4 w-4" />}
              color="green"
            />
            <HeaderCard title="Topic" value={statusData.topicNum} icon={<Hash className="h-4 w-4" />} color="orange" />
            <HeaderCard
              title="Subscription"
              value={statusData.subscribeNum}
              icon={<Bell className="h-4 w-4" />}
              color="purple"
            />
          </div>

          {/* 第二行：Connector + 其他高级指标（4个panel）*/}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <CombinedCard
              title="Connector"
              color="purple"
              items={[
                {
                  label: 'Connector Num',
                  value: statusData.connectorNum,
                  icon: <Plug className="h-3 w-3" />,
                },
                {
                  label: 'Thread Num',
                  value: statusData.connectorThreadNum,
                  icon: <Activity className="h-3 w-3" />,
                },
              ]}
            />
            <CombinedCard
              title="Message Rate"
              color="cyan"
              items={[
                {
                  label: 'In Rate',
                  value: statusData.messageInRate,
                  icon: <Download className="h-3 w-3" />,
                },
                {
                  label: 'Out Rate',
                  value: statusData.messageOutRate,
                  icon: <Upload className="h-3 w-3" />,
                },
              ]}
            />
            <CombinedCard
              title="Exclusive Subscribe"
              color="pink"
              items={[
                {
                  label: 'Subscriptions',
                  value: statusData.exclusiveSubscribeNum,
                  icon: <User className="h-3 w-3" />,
                },
                {
                  label: 'Threads',
                  value: statusData.exclusiveSubscribeThreadNum,
                  icon: <Settings className="h-3 w-3" />,
                },
              ]}
            />
            <CombinedCard
              title="Share Subscribe"
              color="green"
              items={[
                {
                  label: 'Subscriptions',
                  value: statusData.shareSubscribeLeaderNum,
                  icon: <User className="h-3 w-3" />,
                },
                {
                  label: 'Threads',
                  value: statusData.shareSubscribeLeaderThreadNum,
                  icon: <Settings className="h-3 w-3" />,
                },
              ]}
            />
          </div>

          {/* 分割线 */}
          <div className="border-t border-purple-200 dark:border-purple-800"></div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <SimpleLineChart title="Message In (Count/Sec)" data={data?.messageInNum || []} color="cyan" />
            <SimpleLineChart title="Message Out (Count/Sec)" data={data?.messageOutNum || []} color="blue" />
            <SimpleLineChart title="Message Drop (Count/Sec)" data={data?.messageDropNum || []} color="orange" />
            <SimpleLineChart title="Connection (Count)" data={data?.connectionNum || []} color="green" />
            <SimpleLineChart title="Topic (Count)" data={data?.topicNum || []} color="purple" />
            <SimpleLineChart title="Subscription (Count)" data={data?.subscribeNum || []} color="pink" />
          </div>
        </TabsContent>

        <TabsContent value="cluster" className="space-y-4">
          {isClusterLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <RefreshCw className="h-8 w-8 mx-auto text-purple-600 dark:text-purple-400 mb-2 animate-spin" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Loading cluster status...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Cluster Information */}
              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-purple-600" />
                    <span>Cluster Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {/* Cluster Name */}
                    <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800">
                      <label className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide block mb-2">
                        Cluster Name
                      </label>
                      <div className="text-base font-bold text-purple-900 dark:text-purple-100">
                        {clusterData?.cluster_name || '-'}
                      </div>
                    </div>

                    {/* Meta Nodes */}
                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                      <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide block mb-2">
                        Meta Nodes
                      </label>
                      <div className="text-base font-bold text-blue-900 dark:text-blue-100">
                        {clusterData?.meta?.replication ? Object.keys(clusterData.meta.replication).length : 0}
                      </div>
                    </div>

                    {/* Broker Nodes */}
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                      <label className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide block mb-2">
                        Broker Nodes
                      </label>
                      <div className="text-base font-bold text-green-900 dark:text-green-100">
                        {clusterData?.broker_node_list?.length || 0}
                      </div>
                    </div>

                    {/* Version */}
                    <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800">
                      <label className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide block mb-2">
                        Version
                      </label>
                      <div className="text-base font-bold text-orange-900 dark:text-orange-100">
                        {clusterData?.version || '-'}
                      </div>
                    </div>

                    {/* Start Time */}
                    <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800">
                      <label className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide block mb-2">
                        Start Time
                      </label>
                      <div className="text-sm font-bold text-cyan-900 dark:text-cyan-100">
                        {clusterData?.start_time
                          ? (() => {
                              try {
                                const timestamp =
                                  typeof clusterData.start_time === 'string'
                                    ? parseInt(clusterData.start_time)
                                    : clusterData.start_time;
                                return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
                              } catch {
                                return clusterData.start_time;
                              }
                            })()
                          : '-'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Meta Information */}
              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Server className="h-5 w-5 text-orange-600" />
                      <span>Meta Information</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setMetaDetailDialogOpen(true)}
                      className="text-xs"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-[1.2fr_1.2fr_1.2fr_1.4fr]">
                    {/* Current Leader */}
                    <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800">
                      <label className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide block mb-2">
                        Current Leader
                      </label>
                      <div className="text-base font-bold text-orange-900 dark:text-orange-100">
                        {clusterData?.meta?.current_leader ?? '-'}
                      </div>
                    </div>

                    {/* Current Term */}
                    <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800">
                      <label className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide block mb-2">
                        Current Term
                      </label>
                      <div className="text-base font-bold text-cyan-900 dark:text-cyan-100">
                        {clusterData?.meta?.current_term ?? '-'}
                      </div>
                    </div>

                    {/* Last Log Index */}
                    <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800">
                      <label className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide block mb-2">
                        Last Log Index
                      </label>
                      <div className="text-base font-bold text-indigo-900 dark:text-indigo-100">
                        {clusterData?.meta?.last_log_index ?? '-'}
                      </div>
                    </div>

                    {/* Last Quorum Acked */}
                    <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800">
                      <label className="text-xs font-semibold text-pink-700 dark:text-pink-400 uppercase tracking-wide block mb-2">
                        Last Quorum Acked (ns)
                      </label>
                      <div className="text-sm font-bold text-pink-900 dark:text-pink-100 whitespace-nowrap">
                        {clusterData?.meta?.last_quorum_acked
                          ? (() => {
                              try {
                                const nanoseconds =
                                  typeof clusterData.meta.last_quorum_acked === 'string'
                                    ? parseInt(clusterData.meta.last_quorum_acked)
                                    : clusterData.meta.last_quorum_acked;
                                // 纳秒转为毫秒：除以 1,000,000
                                const milliseconds = nanoseconds / 1000000;
                                const nanosPart = nanoseconds % 1000000000;
                                return `${format(new Date(milliseconds), 'yyyy-MM-dd HH:mm:ss')}.${nanosPart}`;
                              } catch {
                                return clusterData.meta.last_quorum_acked;
                              }
                            })()
                          : '-'}
                      </div>
                    </div>
                  </div>

                  {/* Meta Nodes Table */}
                  {clusterData?.meta?.membership_config?.membership?.nodes &&
                    Object.keys(clusterData.meta.membership_config.membership.nodes).length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center space-x-2">
                          <Network className="h-4 w-4 text-orange-600" />
                          <span>Meta Nodes</span>
                        </h3>
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="font-bold">Node ID</TableHead>
                                <TableHead className="font-bold">Node Address</TableHead>
                                <TableHead className="font-bold">Heartbeat (ns)</TableHead>
                                <TableHead className="font-bold">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {Object.entries(clusterData.meta.membership_config.membership.nodes).map(
                                ([nodeId, nodeData]: [string, any]) => {
                                  const heartbeat = clusterData.meta?.heartbeat?.[nodeId];
                                  return (
                                    <TableRow key={nodeId}>
                                      <TableCell className="font-medium">
                                        <div className="flex items-center space-x-2">
                                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                                            <Server className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                                          </div>
                                          <span className="font-mono text-orange-600 dark:text-orange-400">
                                            {nodeId}
                                          </span>
                                        </div>
                                      </TableCell>
                                      <TableCell className="font-mono text-sm">{nodeData?.rpc_addr || '-'}</TableCell>
                                      <TableCell className="text-sm whitespace-nowrap">
                                        {heartbeat
                                          ? (() => {
                                              try {
                                                const nanoseconds =
                                                  typeof heartbeat === 'string' ? parseInt(heartbeat) : heartbeat;
                                                const milliseconds = nanoseconds / 1000000;
                                                const nanosPart = nanoseconds % 1000000000;
                                                return `${format(new Date(milliseconds), 'yyyy-MM-dd HH:mm:ss')}.${nanosPart}`;
                                              } catch {
                                                return heartbeat;
                                              }
                                            })()
                                          : '-'}
                                      </TableCell>
                                      <TableCell>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 w-8 p-0"
                                          onClick={() => {
                                            const replication = clusterData.meta?.replication?.[nodeId];
                                            setSelectedReplication(replication || null);
                                            setReplicationDialogOpen(true);
                                          }}
                                        >
                                          <Eye className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  );
                                },
                              )}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    )}
                </CardContent>
              </Card>

              {/* Broker Node List Table */}
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-blue-600" />
                    <span>Broker Nodes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {clusterData?.broker_node_list && clusterData.broker_node_list.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="font-bold">Node ID</TableHead>
                            <TableHead className="font-bold">Node Address(GRPC)</TableHead>
                            <TableHead className="font-bold">Roles</TableHead>
                            <TableHead className="font-bold">Start Time</TableHead>
                            <TableHead className="font-bold">Register Time</TableHead>
                            <TableHead className="font-bold">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {clusterData.broker_node_list.map((node: any, index: number) => (
                            <TableRow key={node.node_id || index}>
                              <TableCell className="font-medium">
                                <div className="flex items-center space-x-2">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                                    <Server className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <span className="font-mono text-blue-600 dark:text-blue-400">{node.node_id}</span>
                                </div>
                              </TableCell>
                              <TableCell className="font-mono text-sm">{node.node_inner_addr || '-'}</TableCell>
                              <TableCell>
                                {node.roles && Array.isArray(node.roles) && node.roles.length > 0 ? (
                                  <div className="flex flex-wrap gap-1">
                                    {node.roles.map((role: string, idx: number) => (
                                      <Badge
                                        key={idx}
                                        variant="outline"
                                        className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                                      >
                                        {role}
                                      </Badge>
                                    ))}
                                  </div>
                                ) : (
                                  '-'
                                )}
                              </TableCell>
                              <TableCell className="text-sm">
                                {node.start_time
                                  ? (() => {
                                      try {
                                        const timestamp =
                                          typeof node.start_time === 'string'
                                            ? parseInt(node.start_time)
                                            : node.start_time;
                                        return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
                                      } catch {
                                        return node.start_time;
                                      }
                                    })()
                                  : '-'}
                              </TableCell>
                              <TableCell className="text-sm">
                                {node.register_time
                                  ? (() => {
                                      try {
                                        const timestamp =
                                          typeof node.register_time === 'string'
                                            ? parseInt(node.register_time)
                                            : node.register_time;
                                        return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
                                      } catch {
                                        return node.register_time;
                                      }
                                    })()
                                  : '-'}
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => {
                                    const extendInfo = node.extend || node.extend_info || node.extendInfo || '';
                                    setSelectedExtendInfo(extendInfo);
                                    setExtendInfoDialogOpen(true);
                                  }}
                                >
                                  <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">No broker nodes found</div>
                  )}
                </CardContent>
              </Card>
            </>
          )}

          {/* Extend Info Dialog */}
          <Dialog open={extendInfoDialogOpen} onOpenChange={setExtendInfoDialogOpen}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Extended Information</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <pre className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto text-sm">
                  <code className="text-gray-900 dark:text-gray-100">
                    {(() => {
                      try {
                        const parsed = JSON.parse(selectedExtendInfo);
                        return JSON.stringify(parsed, null, 2);
                      } catch {
                        return selectedExtendInfo || 'No data available';
                      }
                    })()}
                  </code>
                </pre>
              </div>
            </DialogContent>
          </Dialog>

          {/* Replication Info Dialog */}
          <Dialog open={replicationDialogOpen} onOpenChange={setReplicationDialogOpen}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Replication Information</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <pre className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto text-sm">
                  <code className="text-gray-900 dark:text-gray-100">
                    {selectedReplication ? JSON.stringify(selectedReplication, null, 2) : 'No data available'}
                  </code>
                </pre>
              </div>
            </DialogContent>
          </Dialog>

          {/* Meta Detail Dialog */}
          <Dialog open={metaDetailDialogOpen} onOpenChange={setMetaDetailDialogOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Meta Information Detail</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <pre className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto text-sm">
                  <code className="text-gray-900 dark:text-gray-100">
                    {clusterData?.meta ? JSON.stringify(clusterData.meta, null, 2) : 'No data available'}
                  </code>
                </pre>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Health Dashboard</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon...</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CommonLayout>
  );
}
