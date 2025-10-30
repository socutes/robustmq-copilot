import { useParams, useLocation } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Info,
  Share2,
  List,
  Eye,
  RefreshCw,
  Wifi,
  User,
  Route,
  Network,
  Shield,
  Clock,
  CheckCircle2,
  XCircle,
  Hash,
  Settings,
  Users,
  Layers,
  BarChart3,
  Plug,
  Database,
  FileText,
} from 'lucide-react';
import { CommonLayout } from '@/components/layout/common-layout';
import { useQuery } from '@tanstack/react-query';
import { getSubscribeDetail, getMonitorData, type TopicListItem } from '@/services/mqtt';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SimpleLineChart } from '@/features/general/dashboard/components/chart';
import { useState } from 'react';

// 格式化时间戳（秒级）为可读时间
const formatTimestamp = (timestamp: number | null | undefined): string => {
  if (!timestamp) return '-';
  // API返回的是秒级时间戳，需要转换为毫秒
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

// 格式化配置数据
const formatConfig = (config: string | undefined) => {
  if (!config) return {};
  try {
    return JSON.parse(config);
  } catch {
    return {};
  }
};

// 获取不同 connector type 的配置字段
const getConfigFields = (type: string | undefined): { label: string; key: string }[] => {
  const lowerType = type?.toLowerCase() || '';
  switch (lowerType) {
    case 'file':
    case 'localfile':
      return [{ label: 'Local File Path', key: 'local_file_path' }];
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
      ];
    case 'mysql':
      return [
        { label: 'Host', key: 'host' },
        { label: 'Port', key: 'port' },
        { label: 'Database', key: 'database' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Table', key: 'table' },
      ];
    case 'postgres':
      return [
        { label: 'Host', key: 'host' },
        { label: 'Port', key: 'port' },
        { label: 'Database', key: 'database' },
        { label: 'Username', key: 'username' },
        { label: 'Password', key: 'password' },
        { label: 'Table', key: 'table' },
      ];
    default:
      return [];
  }
};

// 获取连接器类型图标
const getConnectorTypeIcon = (type: string | undefined) => {
  const lowerType = type?.toLowerCase() || '';
  switch (lowerType) {
    case 'file':
    case 'localfile':
      return FileText;
    case 'kafka':
    case 'pulsar':
    case 'rabbitmq':
      return Share2;
    case 'mysql':
    case 'postgres':
    case 'mongodb':
      return Database;
    default:
      return Plug;
  }
};

export default function SubscribeDetail() {
  const { subscribeId } = useParams({ from: '/_authenticated/general/subscribe/$subscribeId' });
  const location = useLocation();

  // 从路由 state 中获取订阅数据
  const subscribeData = (location.state as any)?.subscribeData;

  const clientId = subscribeData?.client_id || subscribeId;
  const path = subscribeData?.path;

  // 使用 API 获取订阅详情
  const {
    data: detailData,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['subscribeDetail', clientId, path],
    queryFn: () => getSubscribeDetail({ client_id: clientId, path: path }),
    enabled: !!clientId && !!path,
    refetchInterval: 5000, // 每5秒自动刷新
  });

  // 获取订阅发送成功数据
  const { data: subscribeSuccessData } = useQuery({
    queryKey: ['subscribeMonitorData', 'subscribe_send_success_num', clientId, path],
    queryFn: () => getMonitorData('subscribe_send_success_num', undefined, clientId, path),
    enabled: !!clientId && !!path,
  });

  // 获取订阅发送失败数据
  const { data: subscribeFailureData } = useQuery({
    queryKey: ['subscribeMonitorData', 'subscribe_send_failure_num', clientId, path],
    queryFn: () => getMonitorData('subscribe_send_failure_num', undefined, clientId, path),
    enabled: !!clientId && !!path,
  });

  // Sheet 状态管理 - Detail
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<TopicListItem | null>(null);

  // Sheet 状态管理 - Metrics
  const [isMetricsSheetOpen, setIsMetricsSheetOpen] = useState(false);
  const [selectedMetricsTopic, setSelectedMetricsTopic] = useState<TopicListItem | null>(null);

  const handleViewDetail = (topic: TopicListItem) => {
    setSelectedTopic(topic);
    setIsSheetOpen(true);
  };

  const handleViewMetrics = (topic: TopicListItem) => {
    setSelectedMetricsTopic(topic);
    setIsMetricsSheetOpen(true);
  };

  // 获取选中主题的监控数据
  const { data: topicSuccessData } = useQuery({
    queryKey: [
      'subscribeTopicMonitorData',
      'subscribe_topic_send_success_num',
      selectedMetricsTopic?.client_id,
      selectedMetricsTopic?.path,
      selectedMetricsTopic?.topic_name,
    ],
    queryFn: () =>
      getMonitorData(
        'subscribe_topic_send_success_num',
        selectedMetricsTopic?.topic_name,
        selectedMetricsTopic?.client_id,
        selectedMetricsTopic?.path,
      ),
    enabled: !!selectedMetricsTopic && isMetricsSheetOpen,
  });

  const { data: topicFailureData } = useQuery({
    queryKey: [
      'subscribeTopicMonitorData',
      'subscribe_topic_send_failure_num',
      selectedMetricsTopic?.client_id,
      selectedMetricsTopic?.path,
      selectedMetricsTopic?.topic_name,
    ],
    queryFn: () =>
      getMonitorData(
        'subscribe_topic_send_failure_num',
        selectedMetricsTopic?.topic_name,
        selectedMetricsTopic?.client_id,
        selectedMetricsTopic?.path,
      ),
    enabled: !!selectedMetricsTopic && isMetricsSheetOpen,
  });

  if (!clientId || !path) {
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg">Missing client ID or subscription path</div>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <div className="container mx-auto p-6 space-y-6 pb-16">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-lg p-4 shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 dark:bg-purple-500">
                  <List className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    Subscribe Detail
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{clientId}</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{path}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 错误提示 */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>
              Failed to load subscription details: {error instanceof Error ? error.message : 'Unknown error'}
            </AlertDescription>
          </Alert>
        )}

        {/* 加载状态 */}
        {isLoading && (
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        )}

        {/* 基本信息 */}
        {subscribeData && (
          <Card className="border-l-4 border-purple-500 shadow-md hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Client ID */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
                  <User className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                      Client ID
                    </label>
                    <div className="mt-1 font-mono text-sm break-all text-gray-900 dark:text-gray-100">
                      {subscribeData.client_id}
                    </div>
                  </div>
                </div>

                {/* Path */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow">
                  <Route className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                      Path
                    </label>
                    <div className="mt-1 font-mono text-sm break-all text-gray-900 dark:text-gray-100">
                      {subscribeData.path}
                    </div>
                  </div>
                </div>

                {/* Protocol */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 hover:shadow-md transition-shadow">
                  <Wifi className="h-4 w-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
                      Protocol
                    </label>
                    <div className="mt-1 text-sm text-gray-900 dark:text-gray-100">{subscribeData.protocol || '-'}</div>
                  </div>
                </div>

                {/* QoS */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 hover:shadow-md transition-shadow">
                  <Shield className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                      QoS
                    </label>
                    <div className="mt-1 text-sm text-gray-900 dark:text-gray-100">{subscribeData.qos || '-'}</div>
                  </div>
                </div>

                {/* Broker ID */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 hover:shadow-md transition-shadow">
                  <Network className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                      Broker ID
                    </label>
                    <div className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                      {subscribeData.broker_id || '-'}
                    </div>
                  </div>
                </div>

                {/* Create Time */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 hover:shadow-md transition-shadow">
                  <Clock className="h-4 w-4 text-pink-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-pink-700 dark:text-pink-400 uppercase tracking-wide">
                      Create Time
                    </label>
                    <div className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                      {subscribeData.create_time || '-'}
                    </div>
                  </div>
                </div>

                {/* No Local */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <Settings className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide">
                      No Local
                    </label>
                    <div className="mt-1">
                      <Badge variant={subscribeData.no_local ? 'default' : 'secondary'}>
                        {subscribeData.no_local ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Preserve Retain */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <Settings className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide">
                      Preserve Retain
                    </label>
                    <div className="mt-1">
                      <Badge variant={subscribeData.preserve_retain ? 'default' : 'secondary'}>
                        {subscribeData.preserve_retain ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Retain Handling */}
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <Settings className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide">
                      Retain Handling
                    </label>
                    <div className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                      {subscribeData.retain_handling || '-'}
                    </div>
                  </div>
                </div>

                {/* Share Subscribe - 突出显示 */}
                <div className="flex items-start space-x-3 p-5 rounded-xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border-2 border-indigo-300 dark:border-indigo-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  {/* 背景装饰 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 dark:from-indigo-400/10 dark:to-purple-400/10" />

                  {/* 图标容器 */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg ring-2 ring-indigo-200 dark:ring-indigo-800">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0 relative">
                    <label className="text-sm font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center space-x-2">
                      <span>Subscription Type</span>
                      {subscribeData.is_share_sub && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse">
                          Shared
                        </span>
                      )}
                    </label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Badge
                        variant={subscribeData.is_share_sub ? 'default' : 'secondary'}
                        className={
                          subscribeData.is_share_sub
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-4 py-1 text-sm shadow-md'
                            : 'bg-gray-300 dark:bg-gray-700 font-semibold px-4 py-1 text-sm'
                        }
                      >
                        {subscribeData.is_share_sub ? '✓ Share Subscribe Enabled' : 'Exclusive Subscribe'}
                      </Badge>
                      {detailData?.share_sub && detailData.group_leader_info && (
                        <>
                          <span className="text-gray-400">•</span>
                          <Badge
                            variant="outline"
                            className="font-mono text-xs border-indigo-300 dark:border-indigo-700"
                          >
                            Broker {detailData.group_leader_info.broker_id}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="font-mono text-xs border-indigo-300 dark:border-indigo-700"
                          >
                            {detailData.group_leader_info.broker_addr}
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 订阅详情 */}
        {detailData && (
          <>
            {/* 订阅消息统计图表 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <SimpleLineChart
                title="Subscribe Send Success (Count/Sec)"
                data={subscribeSuccessData || []}
                color="green"
              />
              <SimpleLineChart
                title="Subscribe Send Failure (Count/Sec)"
                data={subscribeFailureData || []}
                color="orange"
              />
            </div>

            {/* 主题列表 */}
            <Card className="border-l-4 border-green-500 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                      <List className="h-4 w-4 text-white" />
                    </div>
                    <span>Topic List</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                    >
                      {detailData.topic_list.length}
                    </Badge>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => refetch()}
                    disabled={isFetching}
                    className="h-8 w-8 p-0 hover:bg-green-100 dark:hover:bg-green-900/30"
                  >
                    <RefreshCw
                      className={`h-4 w-4 text-green-600 dark:text-green-400 ${isFetching ? 'animate-spin' : ''}`}
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {detailData.topic_list.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">No topics found</div>
                ) : (
                  <div className="rounded-md border overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Client ID</TableHead>
                          <TableHead>Path</TableHead>
                          <TableHead>Topic Name</TableHead>
                          <TableHead>Push Success</TableHead>
                          <TableHead>Push Error</TableHead>
                          <TableHead>Last Push Time</TableHead>
                          <TableHead>Last Run Time</TableHead>
                          <TableHead>Create Time</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {detailData.topic_list.map((topic, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-mono text-sm">{topic.client_id}</TableCell>
                            <TableCell className="font-mono text-sm">{topic.path}</TableCell>
                            <TableCell className="font-mono text-sm">{topic.topic_name}</TableCell>
                            <TableCell className="text-sm text-center">
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                              >
                                {topic.push_thread?.push_success_record_num?.toLocaleString() || 0}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm text-center">
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
                              >
                                {topic.push_thread?.push_error_record_num?.toLocaleString() || 0}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm">
                              {formatTimestamp(topic.push_thread?.last_push_time)}
                            </TableCell>
                            <TableCell className="text-sm">
                              {formatTimestamp(topic.push_thread?.last_run_time)}
                            </TableCell>
                            <TableCell className="text-sm">{formatTimestamp(topic.push_thread?.create_time)}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
                                  onClick={() => handleViewDetail(topic)}
                                >
                                  <Eye className="mr-0.5 h-2.5 w-2.5" />
                                  Details
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
                                  onClick={() => handleViewMetrics(topic)}
                                >
                                  <BarChart3 className="mr-0.5 h-2.5 w-2.5" />
                                  Metrics
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}

        {/* 详情面板 */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent className="w-[600px] sm:max-w-[600px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Topic Detail</SheetTitle>
              <SheetDescription>{selectedTopic?.topic_name}</SheetDescription>
            </SheetHeader>

            {selectedTopic && (
              <div className="mt-6 space-y-4">
                {/* 独占订阅数据 */}
                {selectedTopic.exclusive_push_data && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Exclusive Subscription Data</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Wifi className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Protocol
                            </label>
                            <p className="text-sm font-mono">{selectedTopic.exclusive_push_data.protocol}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <User className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Client ID
                            </label>
                            <p className="text-sm font-mono break-all">{selectedTopic.exclusive_push_data.client_id}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Route className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Subscription Path
                          </label>
                          <p className="text-sm font-mono break-all">{selectedTopic.exclusive_push_data.sub_path}</p>
                        </div>
                      </div>

                      {selectedTopic.exclusive_push_data.rewrite_sub_path && (
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Network className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Rewrite Path
                            </label>
                            <p className="text-sm font-mono break-all">
                              {selectedTopic.exclusive_push_data.rewrite_sub_path}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Layers className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Topic Name
                          </label>
                          <p className="text-sm font-mono break-all">{selectedTopic.exclusive_push_data.topic_name}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Shield className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              QoS
                            </label>
                            <Badge variant="outline">{selectedTopic.exclusive_push_data.qos}</Badge>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Settings className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              No Local
                            </label>
                            <Badge variant={selectedTopic.exclusive_push_data.nolocal ? 'default' : 'secondary'}>
                              {selectedTopic.exclusive_push_data.nolocal ? 'Yes' : 'No'}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Settings className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Preserve Retain
                            </label>
                            <Badge
                              variant={selectedTopic.exclusive_push_data.preserve_retain ? 'default' : 'secondary'}
                            >
                              {selectedTopic.exclusive_push_data.preserve_retain ? 'Yes' : 'No'}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Settings className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Retain Forward Rule
                            </label>
                            <p className="text-sm">{selectedTopic.exclusive_push_data.retain_forward_rule}</p>
                          </div>
                        </div>
                      </div>

                      {selectedTopic.exclusive_push_data.subscription_identifier && (
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Hash className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Subscription Identifier
                            </label>
                            <p className="text-sm">{selectedTopic.exclusive_push_data.subscription_identifier}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Create Time
                          </label>
                          <p className="text-sm">{formatTimestamp(selectedTopic.exclusive_push_data.create_time)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* 共享订阅数据 */}
                {selectedTopic.share_push_data && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Shared Subscription Data</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Route className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Path
                          </label>
                          <p className="text-sm font-mono break-all">{selectedTopic.share_push_data.path}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Users className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Group Name
                            </label>
                            <Badge variant="outline">{selectedTopic.share_push_data.group_name}</Badge>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                          <Share2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                              Subscription Name
                            </label>
                            <p className="text-sm font-mono">{selectedTopic.share_push_data.sub_name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Layers className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Topic Name
                          </label>
                          <p className="text-sm font-mono break-all">{selectedTopic.share_push_data.topic_name}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-orange-500" />
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Subscriber List
                          </label>
                        </div>
                        <div className="space-y-2">
                          {Object.entries(selectedTopic.share_push_data.sub_list).map(([clientId, subData]) => (
                            <div
                              key={clientId}
                              className="p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
                            >
                              <div className="flex items-center space-x-2 mb-2">
                                <User className="h-3.5 w-3.5 text-purple-500" />
                                <p className="text-sm font-medium font-mono">{clientId}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex items-center space-x-1">
                                  <Wifi className="h-3 w-3 text-blue-500" />
                                  <span className="text-gray-500">Protocol:</span>{' '}
                                  <span className="font-mono">{subData.protocol}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Shield className="h-3 w-3 text-yellow-500" />
                                  <span className="text-gray-500">QoS:</span>{' '}
                                  <Badge variant="outline" className="text-xs">
                                    {subData.qos}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* 推送线程统计 */}
                {selectedTopic.push_thread && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Push Thread Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start space-x-2 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase">
                              Success Count
                            </label>
                            <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                              {selectedTopic.push_thread.push_success_record_num.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                          <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase">
                              Error Count
                            </label>
                            <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                              {selectedTopic.push_thread.push_error_record_num.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Last Push Time
                          </label>
                          <p className="text-sm">{formatTimestamp(selectedTopic.push_thread.last_push_time)}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Clock className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Last Run Time
                          </label>
                          <p className="text-sm">{formatTimestamp(selectedTopic.push_thread.last_run_time)}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <Clock className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                          <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                            Create Time
                          </label>
                          <p className="text-sm">{formatTimestamp(selectedTopic.push_thread.create_time)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Connector 配置信息 */}
                {selectedTopic.connector_config && (
                  <Card className="border-l-4 border-amber-500">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center space-x-2">
                        {(() => {
                          const ConnectorIcon = getConnectorTypeIcon(selectedTopic.connector_type);
                          return <ConnectorIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
                        })()}
                        <span>
                          {selectedTopic.connector_type
                            ? `${selectedTopic.connector_type} Configuration`
                            : 'Connector Configuration'}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {(() => {
                        const configData = formatConfig(selectedTopic.connector_config);
                        const configFields = getConfigFields(selectedTopic.connector_type);

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
                            <div className="text-center py-6">
                              <Settings className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
                              <p className="text-sm text-muted-foreground">No configuration data available.</p>
                            </div>
                          );
                        }

                        return (
                          <div className="space-y-2">
                            {selectedTopic.connector_name && (
                              <div className="flex items-start space-x-2 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50 border border-amber-200 dark:border-amber-800">
                                <Plug className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                                <div className="space-y-1 flex-1">
                                  <label className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase">
                                    Connector Name
                                  </label>
                                  <p className="text-sm font-mono break-all text-amber-900 dark:text-amber-100">
                                    {selectedTopic.connector_name}
                                  </p>
                                </div>
                              </div>
                            )}

                            <div className="grid grid-cols-1 gap-2">
                              {fieldsToDisplay.map(field => {
                                const value = configData[field.key];
                                const isSensitive =
                                  field.key.toLowerCase().includes('password') ||
                                  field.key.toLowerCase().includes('token');
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
                                    className="flex items-start space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <Hash className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div className="space-y-1 flex-1 min-w-0">
                                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                                        {field.label}
                                      </label>
                                      <p className="text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                                        {displayValue}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </SheetContent>
        </Sheet>

        {/* Metrics 面板 */}
        <Sheet open={isMetricsSheetOpen} onOpenChange={setIsMetricsSheetOpen}>
          <SheetContent className="w-[700px] sm:max-w-[700px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <span>Topic Metrics</span>
              </SheetTitle>
              <SheetDescription className="space-y-1">
                <div className="font-mono text-sm">
                  <span className="text-gray-500">Topic:</span> {selectedMetricsTopic?.topic_name}
                </div>
                <div className="font-mono text-xs text-gray-500">
                  {selectedMetricsTopic?.client_id} • {selectedMetricsTopic?.path}
                </div>
              </SheetDescription>
            </SheetHeader>

            {selectedMetricsTopic && (
              <div className="mt-6 space-y-6">
                {/* 统计信息 */}
                {selectedMetricsTopic.push_thread && (
                  <Card className="shadow-md">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center space-x-2">
                        <Hash className="h-4 w-4 text-purple-500" />
                        <span>Statistics Summary</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                          <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <label className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase">
                              Total Success
                            </label>
                          </div>
                          <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                            {selectedMetricsTopic.push_thread.push_success_record_num?.toLocaleString() || 0}
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                          <div className="flex items-center space-x-2 mb-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <label className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase">
                              Total Errors
                            </label>
                          </div>
                          <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                            {selectedMetricsTopic.push_thread.push_error_record_num?.toLocaleString() || 0}
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase">
                              Last Push Time
                            </label>
                          </div>
                          <div className="text-sm font-mono text-blue-700 dark:text-blue-300">
                            {formatTimestamp(selectedMetricsTopic.push_thread.last_push_time)}
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="h-5 w-5 text-purple-500" />
                            <label className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase">
                              Last Run Time
                            </label>
                          </div>
                          <div className="text-sm font-mono text-purple-700 dark:text-purple-300">
                            {formatTimestamp(selectedMetricsTopic.push_thread.last_run_time)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Success Chart */}
                <Card className="shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Send Success</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SimpleLineChart
                      title="Subscribe Topic Send Success (Count/Sec)"
                      data={topicSuccessData || []}
                      color="green"
                    />
                  </CardContent>
                </Card>

                {/* Failure Chart */}
                <Card className="shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center space-x-2">
                      <XCircle className="h-4 w-4 text-orange-500" />
                      <span>Send Failure</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SimpleLineChart
                      title="Subscribe Topic Send Failure (Count/Sec)"
                      data={topicFailureData || []}
                      color="orange"
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </CommonLayout>
  );
}
