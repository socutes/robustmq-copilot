import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, subDays, startOfDay } from 'date-fns';
import { OverviewMetricsDataItem } from '@/services/mqtt';
import { memo, useMemo } from 'react';

interface SimpleLineChartProps {
  title?: string;
  data?: OverviewMetricsDataItem[];
}

// 提取常量，避免每次渲染都创建新对象
const TOOLTIP_STYLE = {
  backgroundColor: 'var(--background)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
};

const ACTIVE_DOT_STYLE = {
  fill: '#7c3aed',
  stroke: '#fff',
  strokeWidth: 2,
  r: 5,
};

// 生成默认数据：从今天开始向前七天
function generateDefaultData(): OverviewMetricsDataItem[] {
  const data: OverviewMetricsDataItem[] = [];
  const today = startOfDay(new Date());

  for (let i = 6; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: date.getTime(),
      count: 0,
    });
  }

  return data;
}

// 格式化时间显示为时分秒格式
function formatTime(timestamp: number): string {
  const date = new Date(timestamp); // timestamp 已经是毫秒时间戳
  return format(date, 'HH:mm:ss');
}

// 格式化大数值，使用 K、M、B 等单位
function formatNumber(value: number): string {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1)}B`;
  }
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
}

const SimpleLineChartComponent = ({ title = '', data }: SimpleLineChartProps) => {
  // 使用 useMemo 缓存处理后的数据
  const chartData = useMemo(() => {
    return !data || data.length === 0 ? generateDefaultData() : data;
  }, [data]);

  // 为每个图表生成唯一的渐变 ID（只在 title 变化时重新计算）
  const gradientId = useMemo(() => {
    return `colorCount-${title.replace(/[^a-zA-Z0-9]/g, '-')}`;
  }, [title]);

  return (
    <Card className="border-l-4 border-purple-500 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 hover:shadow-lg transition-all duration-200 overflow-hidden">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={224}>
          <AreaChart data={chartData} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
            {/* 定义渐变色 */}
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis
              dataKey="date"
              stroke="var(--muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatTime}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatNumber}
              width={60}
            />
            <Tooltip
              contentStyle={TOOLTIP_STYLE}
              labelFormatter={formatTime}
              formatter={(value: number) => [value.toLocaleString(), 'Count']}
            />
            {/* 渐变填充区域 */}
            <Area
              type="monotone"
              dataKey="count"
              stroke="#8b5cf6"
              strokeWidth={2.5}
              fill={`url(#${gradientId})`}
              fillOpacity={1}
              connectNulls={true}
              isAnimationActive={false}
              dot={false}
              activeDot={ACTIVE_DOT_STYLE}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// 使用 memo 优化性能，避免不必要的重渲染
export const SimpleLineChart = memo(SimpleLineChartComponent);
