import { useParams, useLocation } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Info, User, Route, Wifi, Shield, Clock, Hash, Archive, Settings } from 'lucide-react';
import { CommonLayout } from '@/components/layout/common-layout';

// 根据字段名返回对应的图标
const getFieldIcon = (key: string) => {
  const lowerKey = key.toLowerCase();

  if (lowerKey.includes('time')) return <Clock className="h-4 w-4 text-blue-500" />;
  if (lowerKey.includes('id') || lowerKey.includes('pk')) return <Hash className="h-4 w-4 text-purple-500" />;
  if (lowerKey.includes('path') || lowerKey.includes('topic')) return <Route className="h-4 w-4 text-green-500" />;
  if (lowerKey.includes('protocol')) return <Wifi className="h-4 w-4 text-indigo-500" />;
  if (lowerKey.includes('qos')) return <Shield className="h-4 w-4 text-yellow-500" />;
  if (lowerKey.includes('broker')) return <User className="h-4 w-4 text-orange-500" />;
  if (lowerKey.includes('retain')) return <Archive className="h-4 w-4 text-cyan-500" />;
  if (lowerKey.includes('handling') || lowerKey.includes('local')) return <Settings className="h-4 w-4 text-red-500" />;

  return <Info className="h-4 w-4 text-gray-500" />;
};

// 格式化显示值的辅助函数
const formatValue = (key: string, value: any): string => {
  if (value === null || value === undefined) return '-';

  // 如果是对象，返回 JSON 字符串
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  // 如果是布尔值
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return String(value);
};

export default function SubscribeDetail() {
  const { subscribeId } = useParams({ from: '/_authenticated/general/subscribe/$subscribeId' });
  const location = useLocation();

  // 从路由 state 中获取订阅数据
  const subscribeData = (location.state as any)?.subscribeData;

  if (!subscribeData) {
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg">Subscribe not found</div>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </CommonLayout>
    );
  }

  const clientId = subscribeData.client_id || subscribeId;

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
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    Subscribe - Client ID
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{clientId}</h1>
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
              <span>Subscribe Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(subscribeData).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
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
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </CommonLayout>
  );
}
