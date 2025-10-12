import { useParams, useNavigate } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Network,
  MessageSquare,
  Users,
  Clock,
  Shield,
  Globe,
  Wifi,
  Link,
  Database,
  Server,
  Activity,
  Info,
  Hash,
  Tag,
} from 'lucide-react';
import { getClientListHttp } from '@/services/mqtt';
import { format } from 'date-fns';
import { CommonLayout } from '@/components/layout/common-layout';

// 根据字段名返回对应的图标
const getFieldIcon = (key: string) => {
  const lowerKey = key.toLowerCase();

  if (lowerKey.includes('time')) return <Clock className="h-4 w-4 text-blue-500" />;
  if (lowerKey.includes('id')) return <Hash className="h-4 w-4 text-purple-500" />;
  if (lowerKey.includes('protocol')) return <Wifi className="h-4 w-4 text-green-500" />;
  if (lowerKey.includes('connection')) return <Link className="h-4 w-4 text-orange-500" />;
  if (lowerKey.includes('type')) return <Tag className="h-4 w-4 text-pink-500" />;
  if (lowerKey.includes('address') || lowerKey.includes('addr') || lowerKey.includes('ip'))
    return <Globe className="h-4 w-4 text-cyan-500" />;
  if (lowerKey.includes('port')) return <Server className="h-4 w-4 text-indigo-500" />;
  if (lowerKey.includes('status') || lowerKey.includes('state')) return <Activity className="h-4 w-4 text-green-500" />;
  if (lowerKey.includes('auth') || lowerKey.includes('password') || lowerKey.includes('token'))
    return <Shield className="h-4 w-4 text-red-500" />;
  if (lowerKey.includes('data') || lowerKey.includes('payload'))
    return <Database className="h-4 w-4 text-yellow-500" />;
  if (lowerKey.includes('session')) return <Users className="h-4 w-4 text-teal-500" />;

  return <Info className="h-4 w-4 text-gray-500" />;
};

// 格式化显示值的辅助函数
const formatValue = (key: string, value: any): string => {
  if (value === null || value === undefined) return '-';

  // 如果是对象，返回 JSON 字符串
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  // 如果字段名包含 time 并且是数字（时间戳），格式化为日期时间
  if (key.toLowerCase().includes('time') && (typeof value === 'number' || !isNaN(Number(value)))) {
    try {
      const timestamp = typeof value === 'string' ? parseInt(value) : value;
      return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm:ss');
    } catch {
      return String(value);
    }
  }

  return String(value);
};

export default function ClientDetail() {
  const { clientId } = useParams({ from: '/_authenticated/general/client/$clientId' });
  const navigate = useNavigate();

  // 获取客户端列表并找到对应的客户端
  const { data, isLoading } = useQuery({
    queryKey: ['clientDetail', clientId],
    queryFn: async () => {
      const result = await getClientListHttp({
        pagination: { offset: 0, limit: 100 },
        filers: [{ attr: 'client_id', values: [clientId] }],
      });
      return result.clientsList.find(client => client.client_id === clientId);
    },
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

  if (!data) {
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg">Client not found</div>
          <Button onClick={() => navigate({ to: '/general/client' })}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to List
          </Button>
        </div>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <div className="container mx-auto p-6 space-y-6 pb-16">
        {/* 头部 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => navigate({ to: '/general/client' })}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div>
              <p className="text-sm text-muted-foreground">Client ID: {clientId}</p>
            </div>
          </div>
        </div>

        {/* 基本信息 */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Hash className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Client ID
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {data.client_id}
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex-shrink-0 mt-1">
                  <Link className="h-4 w-4 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Connection ID
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {data.connection_id}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 三个面板 */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {/* MQTT Connection Panel */}
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span>MQTT Connection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.mqtt_connection && Object.keys(data.mqtt_connection).length > 0 ? (
                  Object.entries(data.mqtt_connection).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">{getFieldIcon(key)}</div>
                      <div className="flex-1 min-w-0">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          {key.replace(/_/g, ' ')}
                        </label>
                        <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                          {formatValue(key, value)}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 text-center py-4">No MQTT connection data</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Network Connection Panel */}
          <Card className="border-l-4 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Network className="h-5 w-5 text-purple-600" />
                <span>Network Connection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.network_connection && Object.keys(data.network_connection).length > 0 ? (
                  Object.entries(data.network_connection).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">{getFieldIcon(key)}</div>
                      <div className="flex-1 min-w-0">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          {key.replace(/_/g, ' ')}
                        </label>
                        <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                          {formatValue(key, value)}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 text-center py-4">No network connection data</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Session Panel */}
          <Card className="border-l-4 border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>Session</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.session && Object.keys(data.session).length > 0 ? (
                  Object.entries(data.session).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">{getFieldIcon(key)}</div>
                      <div className="flex-1 min-w-0">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          {key.replace(/_/g, ' ')}
                        </label>
                        <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                          {formatValue(key, value)}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 text-center py-4">No session data</div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </CommonLayout>
  );
}
