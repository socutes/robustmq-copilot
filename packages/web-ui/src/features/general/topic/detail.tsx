import { useParams, useNavigate } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Info, MessageCircle, Clock, Users, User, FileText } from 'lucide-react';
import { getTopicDetail, getMonitorData } from '@/services/mqtt';
import { format } from 'date-fns';
import { CommonLayout } from '@/components/layout/common-layout';
import { SimpleLineChart } from '@/features/general/dashboard/components/chart';

export default function TopicDetail() {
  const { topicId } = useParams({ from: '/_authenticated/general/topic/$topicId' });
  const navigate = useNavigate();

  // 调用 topic/detail 接口获取详细信息（topicId 参数实际传的是 topic_name）
  const { data, isLoading, error } = useQuery({
    queryKey: ['topicDetail', topicId],
    queryFn: async () => {
      console.log('[Topic Detail] Fetching topic detail for:', topicId);
      const result = await getTopicDetail(topicId);
      console.log('[Topic Detail] API Response:', result);
      return result;
    },
  });

  // 获取 Topic Message In 数据
  const { data: topicInData } = useQuery({
    queryKey: ['topicMonitorData', 'topic_in_num', topicId],
    queryFn: () => getMonitorData('topic_in_num', topicId),
    enabled: !!topicId,
  });

  // 获取 Topic Message Out 数据
  const { data: topicOutData } = useQuery({
    queryKey: ['topicMonitorData', 'topic_out_num', topicId],
    queryFn: () => getMonitorData('topic_out_num', topicId),
    enabled: !!topicId,
  });

  if (isLoading) {
    return (
      <CommonLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </CommonLayout>
    );
  }

  if (error) {
    console.error('[Topic Detail] Render error:', error);
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg text-red-600">Error loading topic data</div>
          <div className="text-sm text-gray-600">{String(error)}</div>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </CommonLayout>
    );
  }

  if (!data) {
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg">Topic not found</div>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </CommonLayout>
    );
  }

  const topicInfo = data?.topic_info;
  const subscriptions = data?.sub_list || [];

  // 格式化创建时间（秒级时间戳）
  const formattedCreateTime = (() => {
    try {
      if (topicInfo?.create_time) {
        const timestamp =
          typeof topicInfo.create_time === 'string' ? parseInt(topicInfo.create_time) : topicInfo.create_time;
        return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
      }
    } catch (error) {
      console.error('Error formatting create time:', error);
    }
    return '-';
  })();

  // 格式化 Retain Message At（秒级时间戳）
  const formattedRetainMessageAt = (() => {
    try {
      if (data?.retain_message_at) {
        const timestamp =
          typeof data.retain_message_at === 'string' ? parseInt(data.retain_message_at) : data.retain_message_at;
        // 按秒级时间戳处理，需要 * 1000
        return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
      }
    } catch (error) {
      console.error('Error formatting retain message at:', error);
    }
    return '-';
  })();

  // Base64 解码 Retain Message
  const decodedRetainMessage = (() => {
    try {
      if (data?.retain_message) {
        return atob(data.retain_message);
      }
    } catch (error) {
      console.error('Error decoding retain message:', error);
      return data?.retain_message || '-';
    }
    return '-';
  })();

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
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    Topic Name
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {topicInfo?.topic_name || topicId}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 基本信息 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-purple-600" />
              <span>Basic Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 mt-1">
                  <MessageCircle className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                    Topic Name
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {topicInfo?.topic_name || '-'}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                    Created At
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {formattedCreateTime}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                    Retain Message At
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {formattedRetainMessageAt}
                  </div>
                </div>
              </div>
            </div>

            {/* Retain Message 单独显示 */}
            <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide block mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-yellow-600 dark:text-yellow-500" />
                Retain Message (Decoded)
              </label>
              <div className="text-sm font-mono break-all text-gray-900 dark:text-gray-100 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border border-yellow-200 dark:border-yellow-700 max-h-40 overflow-y-auto relative">
                <FileText className="h-5 w-5 absolute top-2 right-2 text-yellow-400/30 dark:text-yellow-600/30" />
                {decodedRetainMessage}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 消息统计图表 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SimpleLineChart title="Topic Message In (Count/Sec)" data={topicInData || []} color="cyan" />
          <SimpleLineChart title="Topic Message Out (Count/Sec)" data={topicOutData || []} color="blue" />
        </div>

        {/* 订阅列表 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Subscriptions</span>
              <span className="ml-2 text-sm text-muted-foreground">({subscriptions.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subscriptions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No subscriptions found</div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Client ID</TableHead>
                      <TableHead className="w-[60%]">Path</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptions.map((sub, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div
                            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() =>
                              navigate({ to: '/general/client/$clientId', params: { clientId: sub.client_id } })
                            }
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                              <User className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="font-medium text-purple-600 dark:text-purple-400 hover:underline">
                              {sub.client_id}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-mono text-sm">{sub.path}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </CommonLayout>
  );
}
