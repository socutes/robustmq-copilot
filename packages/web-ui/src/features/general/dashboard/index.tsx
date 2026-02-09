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
  Users,
  RefreshCw,
  Settings,
  Activity,
  Monitor,
  LayoutDashboard,
  Server,
  BarChart3,
  Eye,
  Plug,
  Database,
  Clock,
  Layers,
  GitBranch,
  Wifi,
  HardDrive,
  Folder,
  CheckCircle2,
  AlertCircle,
  Image,
  FileText,
} from 'lucide-react';
import { getOverviewMetricsData, getOverviewStatusData, getClusterStatus } from '@/services/mqtt';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { useState } from 'react';

export default function Dashboard() {
  const [metaDetailSheetOpen, setMetaDetailSheetOpen] = useState(false);
  const [brokerDetailSheetOpen, setBrokerDetailSheetOpen] = useState(false);
  const [selectedBrokerNode, setSelectedBrokerNode] = useState<any>(null);

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
      shareGroupNum: 0,
      shareSubNum: 0,
      shareSubThreadNum: 0,
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
            <Card className="relative overflow-hidden border-l-4 border-green-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-gray-900 dark:via-green-950 dark:to-emerald-950 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
                  Share Subscribe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                {/* 第一行: Group Num / Sub Num */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-green-100/50 dark:hover:bg-green-900/20 transition-colors duration-200">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-md group-hover:rotate-12 transition-transform duration-300">
                        <Users className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Groups</span>
                    </div>
                    <div className="text-lg font-black bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                      {statusData.shareGroupNum}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-green-100/50 dark:hover:bg-green-900/20 transition-colors duration-200">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-md group-hover:rotate-12 transition-transform duration-300">
                        <Bell className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Subscriptions</span>
                    </div>
                    <div className="text-lg font-black bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                      {statusData.shareSubNum}
                    </div>
                  </div>
                </div>
                {/* 第二行: Thread Num */}
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-green-100/50 dark:hover:bg-green-900/20 transition-colors duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-md group-hover:rotate-12 transition-transform duration-300">
                      <Activity className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Threads</span>
                  </div>
                  <div className="text-xl font-black bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    {statusData.shareSubThreadNum}
                  </div>
                </div>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
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
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Cluster Name */}
                    <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800">
                      <label className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide block mb-2 text-left">
                        Cluster Name
                      </label>
                      <div className="text-base font-bold text-purple-900 dark:text-purple-100 text-center">
                        {clusterData?.cluster_name || '-'}
                      </div>
                    </div>

                    {/* Nodes */}
                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                      <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide block mb-3 text-left">
                        Nodes
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-center flex-1">
                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">Total</div>
                          <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {(() => {
                              const metaCount = clusterData?.meta?.replication
                                ? Object.keys(clusterData.meta.replication).length
                                : 0;
                              const brokerCount = clusterData?.broker_node_list?.length || 0;
                              const totalNodes = clusterData?.nodes?.length || metaCount + brokerCount;
                              return totalNodes;
                            })()}
                          </div>
                        </div>
                        <div className="h-8 w-px bg-blue-300 dark:bg-blue-700"></div>
                        <div className="text-center flex-1">
                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">Meta</div>
                          <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {clusterData?.meta?.replication ? Object.keys(clusterData.meta.replication).length : 0}
                          </div>
                        </div>
                        <div className="h-8 w-px bg-blue-300 dark:bg-blue-700"></div>
                        <div className="text-center flex-1">
                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">Broker</div>
                          <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {clusterData?.broker_node_list?.length || 0}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Version */}
                    <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800">
                      <label className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide block mb-2 text-left">
                        Version
                      </label>
                      <div className="text-base font-bold text-orange-900 dark:text-orange-100 text-center">
                        {clusterData?.version || '-'}
                      </div>
                    </div>

                    {/* Start Time */}
                    <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800">
                      <label className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide block mb-2 text-left">
                        Start Time
                      </label>
                      <div className="text-sm font-bold text-cyan-900 dark:text-cyan-100 text-center">
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

                  {/* Nodes IP List */}
                  {clusterData?.nodes && clusterData.nodes.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center space-x-2">
                        <Network className="h-4 w-4 text-purple-600" />
                        <span>Nodes</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {clusterData.nodes.map((node: any, index: number) => (
                          <div
                            key={index}
                            className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800"
                          >
                            <Server className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span className="font-mono text-sm text-purple-700 dark:text-purple-300">
                              {node.node_ip || node.ip || node}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                      onClick={() => setMetaDetailSheetOpen(true)}
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

              {/* Broker Nodes Table */}
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
                              <TableCell className="font-mono text-sm">{node.grpc_addr || '-'}</TableCell>
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
                                    setSelectedBrokerNode(node);
                                    setBrokerDetailSheetOpen(true);
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

          {/* Meta Detail Sheet */}
          <Sheet open={metaDetailSheetOpen} onOpenChange={setMetaDetailSheetOpen}>
            <SheetContent className="w-[700px] sm:max-w-[700px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Meta Information Detail</SheetTitle>
                <SheetDescription>Complete metadata information for the cluster</SheetDescription>
              </SheetHeader>

              {clusterData?.meta && (
                <div className="mt-6 space-y-6">
                  {/* Basic Raft State */}
                  <Card className="border-l-4 border-purple-500">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center space-x-2">
                        <GitBranch className="h-5 w-5 text-purple-600" />
                        <span>Raft State</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        {clusterData.meta.id !== undefined && (
                          <div>
                            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                              Node ID
                            </label>
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                              {clusterData.meta.id}
                            </div>
                          </div>
                        )}
                        {clusterData.meta.state && (
                          <div>
                            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                              State
                            </label>
                            <div className="mt-1">
                              <Badge
                                className={
                                  clusterData.meta.state === 'Leader'
                                    ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300'
                                    : 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300'
                                }
                              >
                                {clusterData.meta.state}
                              </Badge>
                            </div>
                          </div>
                        )}
                        <div>
                          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                            Current Leader
                          </label>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                            {clusterData.meta.current_leader ?? '-'}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                            Current Term
                          </label>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                            {clusterData.meta.current_term ?? '-'}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                            Last Log Index
                          </label>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                            {clusterData.meta.last_log_index ?? '-'}
                          </div>
                        </div>
                        {clusterData.meta.millis_since_quorum_ack !== undefined && (
                          <div>
                            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                              Millis Since Quorum Ack
                            </label>
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                              {clusterData.meta.millis_since_quorum_ack} ms
                            </div>
                          </div>
                        )}
                      </div>
                      {clusterData.meta.last_quorum_acked && (
                        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                            Last Quorum Acked
                          </label>
                          <div className="text-xs font-mono font-medium text-gray-900 dark:text-gray-100 mt-1">
                            {(() => {
                              try {
                                const nanoseconds =
                                  typeof clusterData.meta.last_quorum_acked === 'string'
                                    ? parseInt(clusterData.meta.last_quorum_acked)
                                    : clusterData.meta.last_quorum_acked;
                                const milliseconds = nanoseconds / 1000000;
                                const nanosPart = nanoseconds % 1000000000;
                                return `${format(new Date(milliseconds), 'yyyy-MM-dd HH:mm:ss')}.${nanosPart}`;
                              } catch {
                                return clusterData.meta.last_quorum_acked;
                              }
                            })()}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Running State */}
                  {clusterData.meta.running_state && (
                    <Card className="border-l-4 border-green-500">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span>Running State</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2">
                          {clusterData.meta.running_state.Ok !== undefined ? (
                            <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              OK
                            </Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-300">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {JSON.stringify(clusterData.meta.running_state)}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Vote Information */}
                  {clusterData.meta.vote && (
                    <Card className="border-l-4 border-indigo-500">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                          <span>Vote Information</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          {clusterData.meta.vote.leader_id && (
                            <>
                              <div>
                                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                  Voted Leader ID
                                </label>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                                  Node {clusterData.meta.vote.leader_id.node_id}
                                </div>
                              </div>
                              <div>
                                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                  Voted Term
                                </label>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                                  {clusterData.meta.vote.leader_id.term}
                                </div>
                              </div>
                            </>
                          )}
                          {clusterData.meta.vote.committed !== undefined && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                Committed
                              </label>
                              <div className="mt-1">
                                <Badge
                                  className={
                                    clusterData.meta.vote.committed
                                      ? 'bg-green-100 text-green-700 border-green-200'
                                      : 'bg-gray-100 text-gray-700 border-gray-200'
                                  }
                                >
                                  {clusterData.meta.vote.committed ? 'Yes' : 'No'}
                                </Badge>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Log Indices */}
                  <Card className="border-l-4 border-cyan-500">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-cyan-600" />
                        <span>Log Indices</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {clusterData.meta.last_applied && (
                        <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800">
                          <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Last Applied</div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Index:</span>{' '}
                              <span className="font-medium">{clusterData.meta.last_applied.index}</span>
                            </div>
                            {clusterData.meta.last_applied.leader_id && (
                              <>
                                <div>
                                  <span className="text-gray-600 dark:text-gray-400">Node:</span>{' '}
                                  <span className="font-medium">{clusterData.meta.last_applied.leader_id.node_id}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600 dark:text-gray-400">Term:</span>{' '}
                                  <span className="font-medium">{clusterData.meta.last_applied.leader_id.term}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                      {clusterData.meta.snapshot && (
                        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                          <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center space-x-2">
                            <Image className="h-4 w-4" />
                            <span>Snapshot</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Index:</span>{' '}
                              <span className="font-medium">{clusterData.meta.snapshot.index}</span>
                            </div>
                            {clusterData.meta.snapshot.leader_id && (
                              <>
                                <div>
                                  <span className="text-gray-600 dark:text-gray-400">Node:</span>{' '}
                                  <span className="font-medium">{clusterData.meta.snapshot.leader_id.node_id}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600 dark:text-gray-400">Term:</span>{' '}
                                  <span className="font-medium">{clusterData.meta.snapshot.leader_id.term}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                      {clusterData.meta.purged && (
                        <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800">
                          <div className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Purged</div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Index:</span>{' '}
                              <span className="font-medium">{clusterData.meta.purged.index}</span>
                            </div>
                            {clusterData.meta.purged.leader_id && (
                              <>
                                <div>
                                  <span className="text-gray-600 dark:text-gray-400">Node:</span>{' '}
                                  <span className="font-medium">{clusterData.meta.purged.leader_id.node_id}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600 dark:text-gray-400">Term:</span>{' '}
                                  <span className="font-medium">{clusterData.meta.purged.leader_id.term}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Membership Configuration */}
                  {clusterData.meta.membership_config?.membership?.nodes && (
                    <Card className="border-l-4 border-blue-500">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center space-x-2">
                          <Layers className="h-5 w-5 text-blue-600" />
                          <span>Membership Configuration</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Object.entries(clusterData.meta.membership_config.membership.nodes).map(
                            ([nodeId, nodeData]: [string, any]) => (
                              <div
                                key={nodeId}
                                className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold">
                                      {nodeId}
                                    </div>
                                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                                      Node {nodeId}
                                    </span>
                                  </div>
                                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800">
                                    {nodeData?.rpc_addr || 'N/A'}
                                  </Badge>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Heartbeat Information */}
                  {clusterData.meta.heartbeat && Object.keys(clusterData.meta.heartbeat).length > 0 && (
                    <Card className="border-l-4 border-green-500">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center space-x-2">
                          <Activity className="h-5 w-5 text-green-600" />
                          <span>Heartbeat Information</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Object.entries(clusterData.meta.heartbeat).map(([nodeId, heartbeat]: [string, any]) => (
                            <div
                              key={nodeId}
                              className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                            >
                              <div className="flex items-center space-x-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
                                  {nodeId}
                                </div>
                                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                                  Node {nodeId}
                                </span>
                              </div>
                              <div className="text-xs font-mono text-green-700 dark:text-green-300">
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
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Replication Information */}
                  {clusterData.meta.replication && Object.keys(clusterData.meta.replication).length > 0 && (
                    <Card className="border-l-4 border-orange-500">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center space-x-2">
                          <Database className="h-5 w-5 text-orange-600" />
                          <span>Replication Information</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Object.entries(clusterData.meta.replication).map(([nodeId, replication]: [string, any]) => (
                            <div
                              key={nodeId}
                              className="rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800"
                            >
                              <details className="group">
                                <summary className="cursor-pointer p-3 hover:bg-orange-100 dark:hover:bg-orange-900 rounded-lg transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
                                        {nodeId}
                                      </div>
                                      <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                                        Node {nodeId}
                                      </span>
                                    </div>
                                    <span className="text-xs text-orange-600 dark:text-orange-400 group-open:hidden">
                                      Click to expand
                                    </span>
                                    <span className="text-xs text-orange-600 dark:text-orange-400 hidden group-open:inline">
                                      Click to collapse
                                    </span>
                                  </div>
                                </summary>
                                <div className="px-3 pb-3 pt-2">
                                  {replication && typeof replication === 'object' && (
                                    <div className="space-y-2">
                                      {/* Leader ID */}
                                      {replication.leader_id && (
                                        <div className="p-2 rounded bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700">
                                          <div className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-1">
                                            Leader ID
                                          </div>
                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                              <span className="text-gray-600 dark:text-gray-400">Term:</span>{' '}
                                              <span className="font-medium">{replication.leader_id.term}</span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600 dark:text-gray-400">Node ID:</span>{' '}
                                              <span className="font-medium">{replication.leader_id.node_id}</span>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {/* Index */}
                                      {replication.index !== undefined && (
                                        <div className="p-2 rounded bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700">
                                          <div className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-1">
                                            Index
                                          </div>
                                          <div className="text-sm font-medium">{replication.index}</div>
                                        </div>
                                      )}
                                      {/* Raw JSON for other fields */}
                                      {Object.keys(replication).filter(key => key !== 'leader_id' && key !== 'index')
                                        .length > 0 && (
                                        <details className="mt-2">
                                          <summary className="text-xs text-orange-600 dark:text-orange-400 cursor-pointer hover:underline">
                                            View complete data
                                          </summary>
                                          <pre className="mt-2 p-2 rounded bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 overflow-x-auto text-xs">
                                            <code className="text-gray-900 dark:text-gray-100">
                                              {JSON.stringify(replication, null, 2)}
                                            </code>
                                          </pre>
                                        </details>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </details>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Raw JSON (Collapsed) */}
                  <Card className="border-l-4 border-gray-500">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center space-x-2">
                        <Settings className="h-5 w-5 text-gray-600" />
                        <span>Raw JSON Data</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <details className="cursor-pointer">
                        <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                          Click to view raw JSON
                        </summary>
                        <pre className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto text-xs">
                          <code className="text-gray-900 dark:text-gray-100">
                            {JSON.stringify(clusterData.meta, null, 2)}
                          </code>
                        </pre>
                      </details>
                    </CardContent>
                  </Card>
                </div>
              )}

              {!clusterData?.meta && (
                <div className="mt-6 text-center py-8 text-gray-500 dark:text-gray-400">No metadata available</div>
              )}
            </SheetContent>
          </Sheet>
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

      {/* Broker Node Detail Sheet */}
      <Sheet open={brokerDetailSheetOpen} onOpenChange={setBrokerDetailSheetOpen}>
        <SheetContent className="w-[600px] sm:max-w-[600px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Broker Node Detail</SheetTitle>
            <SheetDescription>Node ID: {selectedBrokerNode?.node_id || '-'}</SheetDescription>
          </SheetHeader>

          {selectedBrokerNode && (
            <div className="mt-6 space-y-6">
              {/* Basic Information */}
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-base flex items-center space-x-2">
                    <Server className="h-5 w-5 text-blue-600" />
                    <span>Basic Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                        Node ID
                      </label>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                        {selectedBrokerNode.node_id || '-'}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                        Node IP
                      </label>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                        {selectedBrokerNode.node_ip || '-'}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                        Cluster Name
                      </label>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                        {selectedBrokerNode.cluster_name || '-'}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                        Cluster Type
                      </label>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                        {selectedBrokerNode.cluster_type || '-'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Network Information */}
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-base flex items-center space-x-2">
                    <Network className="h-5 w-5 text-green-600" />
                    <span>Network Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                      GRPC Address
                    </label>
                    <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                      {selectedBrokerNode.grpc_addr || '-'}
                    </div>
                  </div>
                  {selectedBrokerNode.engine_addr && (
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                        Engine Address
                      </label>
                      <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                        {selectedBrokerNode.engine_addr}
                      </div>
                    </div>
                  )}
                  {selectedBrokerNode.node_inner_addr && (
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                        Node Inner Address
                      </label>
                      <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                        {selectedBrokerNode.node_inner_addr}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Roles */}
              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-base flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Roles</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedBrokerNode.roles &&
                  Array.isArray(selectedBrokerNode.roles) &&
                  selectedBrokerNode.roles.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedBrokerNode.roles.map((role: string, idx: number) => (
                        <Badge
                          key={idx}
                          className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No roles assigned</p>
                  )}
                </CardContent>
              </Card>

              {/* MQTT Addresses */}
              {(() => {
                try {
                  const extend =
                    typeof selectedBrokerNode.extend === 'string'
                      ? JSON.parse(selectedBrokerNode.extend)
                      : selectedBrokerNode.extend;
                  const mqtt = extend?.mqtt;
                  if (mqtt) {
                    return (
                      <Card className="border-l-4 border-cyan-500">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center space-x-2">
                            <Wifi className="h-5 w-5 text-cyan-600" />
                            <span>MQTT Addresses</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {mqtt.grpc_addr && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                GRPC Address
                              </label>
                              <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                {mqtt.grpc_addr}
                              </div>
                            </div>
                          )}
                          {mqtt.mqtt_addr && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                MQTT Address
                              </label>
                              <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                {mqtt.mqtt_addr}
                              </div>
                            </div>
                          )}
                          {mqtt.mqtts_addr && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                MQTTS Address (TLS)
                              </label>
                              <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                {mqtt.mqtts_addr}
                              </div>
                            </div>
                          )}
                          {mqtt.websocket_addr && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                WebSocket Address
                              </label>
                              <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                {mqtt.websocket_addr}
                              </div>
                            </div>
                          )}
                          {mqtt.websockets_addr && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                WebSockets Address (TLS)
                              </label>
                              <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                {mqtt.websockets_addr}
                              </div>
                            </div>
                          )}
                          {mqtt.quic_addr && (
                            <div>
                              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                                QUIC Address
                              </label>
                              <div className="text-sm font-mono font-medium text-gray-900 dark:text-gray-100 mt-1 bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                {mqtt.quic_addr}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  }
                } catch (e) {
                  return null;
                }
                return null;
              })()}

              {/* Storage Information */}
              {selectedBrokerNode.storage_fold &&
                Array.isArray(selectedBrokerNode.storage_fold) &&
                selectedBrokerNode.storage_fold.length > 0 && (
                  <Card className="border-l-4 border-yellow-500">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center space-x-2">
                        <HardDrive className="h-5 w-5 text-yellow-600" />
                        <span>Storage Information</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {selectedBrokerNode.storage_fold.map((path: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 p-2 rounded bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800"
                        >
                          <Folder className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                          <span className="text-sm font-mono text-yellow-700 dark:text-yellow-300">{path}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

              {/* Time Information */}
              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-base flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-orange-600" />
                    <span>Time Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                      Start Time
                    </label>
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                      {selectedBrokerNode.start_time
                        ? (() => {
                            try {
                              const timestamp =
                                typeof selectedBrokerNode.start_time === 'string'
                                  ? parseInt(selectedBrokerNode.start_time)
                                  : selectedBrokerNode.start_time;
                              return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
                            } catch {
                              return selectedBrokerNode.start_time;
                            }
                          })()
                        : '-'}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                      Register Time
                    </label>
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                      {selectedBrokerNode.register_time
                        ? (() => {
                            try {
                              const timestamp =
                                typeof selectedBrokerNode.register_time === 'string'
                                  ? parseInt(selectedBrokerNode.register_time)
                                  : selectedBrokerNode.register_time;
                              return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
                            } catch {
                              return selectedBrokerNode.register_time;
                            }
                          })()
                        : '-'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Raw JSON Data */}
              <Card className="border-l-4 border-gray-500">
                <CardHeader>
                  <CardTitle className="text-base flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-gray-600" />
                    <span>Raw JSON Data</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <details className="cursor-pointer">
                    <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                      Click to view complete node data
                    </summary>
                    <pre className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto text-xs">
                      <code className="text-gray-900 dark:text-gray-100">
                        {JSON.stringify(selectedBrokerNode, null, 2)}
                      </code>
                    </pre>
                  </details>
                </CardContent>
              </Card>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </CommonLayout>
  );
}
