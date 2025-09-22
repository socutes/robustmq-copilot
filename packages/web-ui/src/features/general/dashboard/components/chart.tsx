import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, subDays, startOfDay } from 'date-fns';
import { OverviewMetricsDataItem } from '@/services/mqtt';

interface SimpleLineChartProps {
  title?: string;
  data?: OverviewMetricsDataItem[];
}

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

export function SimpleLineChart({ title = '', data }: SimpleLineChartProps) {
  const chartData = !data || data.length === 0 ? generateDefaultData() : data;

  return (
    <Card className="border-l-4 border-purple-500 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
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
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={value => `${value}`}
              width={20}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
              }}
              labelFormatter={formatTime}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8b5cf6"
              strokeWidth={3}
              connectNulls={true}
              isAnimationActive={true}
              animationDuration={1000}
              dot={{
                fill: '#8b5cf6',
                stroke: '#fff',
                strokeWidth: 2,
                r: 5,
              }}
              activeDot={{
                fill: '#7c3aed',
                stroke: '#fff',
                strokeWidth: 2,
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
