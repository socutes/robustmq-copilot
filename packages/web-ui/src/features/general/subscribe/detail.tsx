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
} from 'lucide-react';
import { CommonLayout } from '@/components/layout/common-layout';
import { useQuery } from '@tanstack/react-query';
import { getSubscribeDetail, type TopicListItem } from '@/services/mqtt';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
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

  // Sheet 状态管理
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<TopicListItem | null>(null);

  const handleViewDetail = (topic: TopicListItem) => {
    setSelectedTopic(topic);
    setIsSheetOpen(true);
  };

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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-purple-600" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Client ID</label>
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-100">{subscribeData.client_id}</span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Path</label>
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-100">{subscribeData.path}</span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Protocol</label>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{subscribeData.protocol || '-'}</span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">QoS</label>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{subscribeData.qos || '-'}</span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Broker ID</label>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{subscribeData.broker_id || '-'}</span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Create Time
                  </label>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{subscribeData.create_time || '-'}</span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">No Local</label>
                  <Badge variant={subscribeData.no_local ? 'default' : 'secondary'}>
                    {subscribeData.no_local ? 'Yes' : 'No'}
                  </Badge>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Preserve Retain
                  </label>
                  <Badge variant={subscribeData.preserve_retain ? 'default' : 'secondary'}>
                    {subscribeData.preserve_retain ? 'Yes' : 'No'}
                  </Badge>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Retain Handling
                  </label>
                  <span className="text-sm text-gray-900 dark:text-gray-100">
                    {subscribeData.retain_handling || '-'}
                  </span>
                </div>

                <div className="flex flex-col space-y-1.5 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Share Subscribe
                  </label>
                  <Badge variant={subscribeData.is_share_sub ? 'default' : 'secondary'}>
                    {subscribeData.is_share_sub ? 'Yes' : 'No'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 订阅详情 */}
        {detailData && (
          <>
            {/* 订阅类型信息 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Share2 className="h-5 w-5 text-purple-600" />
                  <span>Subscription Type</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share Subscription:</span>
                    <Badge variant={detailData.share_sub ? 'default' : 'secondary'}>
                      {detailData.share_sub ? 'Yes' : 'No'}
                    </Badge>
                  </div>
                  {detailData.share_sub && detailData.group_leader_info && (
                    <div className="flex items-center space-x-2 ml-8">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Group Leader:</span>
                      <Badge variant="outline">
                        Broker {detailData.group_leader_info.broker_id} ({detailData.group_leader_info.broker_addr})
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* 主题列表 */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <List className="h-5 w-5 text-purple-600" />
                    <span>Topic List</span>
                    <Badge variant="secondary">{detailData.topic_list.length}</Badge>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => refetch()}
                    disabled={isFetching}
                    className="h-8 w-8 p-0"
                  >
                    <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
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
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
                                onClick={() => handleViewDetail(topic)}
                              >
                                <Eye className="mr-0.5 h-2.5 w-2.5" />
                                Details
                              </Button>
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
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </CommonLayout>
  );
}
