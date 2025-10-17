import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, subDays, startOfDay } from 'date-fns';
import { OverviewMetricsDataItem } from '@/services/mqtt';
import { memo, useMemo } from 'react';

interface SimpleLineChartProps {
  title?: string;
  data?: OverviewMetricsDataItem[];
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'pink' | 'cyan';
}

// 颜色主题配置
const colorThemes = {
  blue: {
    border: 'border-blue-500',
    bgGradient: 'from-white to-blue-50 dark:from-gray-900 dark:to-blue-950',
    title: 'text-blue-700 dark:text-blue-300',
    stroke: '#3b82f6',
    gradientStart: '#3b82f6',
    gradientEnd: '#3b82f6',
    activeDot: '#3b82f6',
  },
  green: {
    border: 'border-green-500',
    bgGradient: 'from-white to-green-50 dark:from-gray-900 dark:to-green-950',
    title: 'text-green-700 dark:text-green-300',
    stroke: '#10b981',
    gradientStart: '#10b981',
    gradientEnd: '#10b981',
    activeDot: '#10b981',
  },
  orange: {
    border: 'border-orange-500',
    bgGradient: 'from-white to-orange-50 dark:from-gray-900 dark:to-orange-950',
    title: 'text-orange-700 dark:text-orange-300',
    stroke: '#f97316',
    gradientStart: '#f97316',
    gradientEnd: '#f97316',
    activeDot: '#f97316',
  },
  purple: {
    border: 'border-purple-500',
    bgGradient: 'from-white to-purple-50 dark:from-gray-900 dark:to-purple-950',
    title: 'text-purple-700 dark:text-purple-300',
    stroke: '#8b5cf6',
    gradientStart: '#8b5cf6',
    gradientEnd: '#8b5cf6',
    activeDot: '#8b5cf6',
  },
  pink: {
    border: 'border-pink-500',
    bgGradient: 'from-white to-pink-50 dark:from-gray-900 dark:to-pink-950',
    title: 'text-pink-700 dark:text-pink-300',
    stroke: '#ec4899',
    gradientStart: '#ec4899',
    gradientEnd: '#ec4899',
    activeDot: '#ec4899',
  },
  cyan: {
    border: 'border-cyan-500',
    bgGradient: 'from-white to-cyan-50 dark:from-gray-900 dark:to-cyan-950',
    title: 'text-cyan-700 dark:text-cyan-300',
    stroke: '#06b6d4',
    gradientStart: '#06b6d4',
    gradientEnd: '#06b6d4',
    activeDot: '#06b6d4',
  },
};

// 提取常量，避免每次渲染都创建新对象
const TOOLTIP_STYLE = {
  backgroundColor: 'var(--background)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
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

const SimpleLineChartComponent = ({ title = '', data, color = 'purple' }: SimpleLineChartProps) => {
  const theme = colorThemes[color];

  // 使用 useMemo 缓存处理后的数据
  const chartData = useMemo(() => {
    return !data || data.length === 0 ? generateDefaultData() : data;
  }, [data]);

  // 为每个图表生成唯一的渐变 ID（只在 title 变化时重新计算）
  const gradientId = useMemo(() => {
    return `colorCount-${title.replace(/[^a-zA-Z0-9]/g, '-')}`;
  }, [title]);

  // 动态生成 activeDot 样式
  const activeDotStyle = useMemo(
    () => ({
      fill: theme.activeDot,
      stroke: '#fff',
      strokeWidth: 2,
      r: 5,
    }),
    [theme.activeDot],
  );

  return (
    <Card
      className={`border-l-4 ${theme.border} bg-gradient-to-br ${theme.bgGradient} hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group`}
    >
      <CardHeader className="relative">
        <CardTitle className={`text-sm font-bold ${theme.title} uppercase tracking-wide`}>{title}</CardTitle>
        {/* 装饰线 */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.border} opacity-50`} />
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={224}>
          <AreaChart data={chartData} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
            {/* 定义渐变色 */}
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={theme.gradientStart} stopOpacity={0.3} />
                <stop offset="95%" stopColor={theme.gradientEnd} stopOpacity={0} />
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
              stroke={theme.stroke}
              strokeWidth={2.5}
              fill={`url(#${gradientId})`}
              fillOpacity={1}
              connectNulls={true}
              isAnimationActive={false}
              dot={false}
              activeDot={activeDotStyle}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// 使用 memo 优化性能，避免不必要的重渲染
export const SimpleLineChart = memo(SimpleLineChartComponent);
