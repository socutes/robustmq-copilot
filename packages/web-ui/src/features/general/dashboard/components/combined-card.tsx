import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export interface CombinedCardProps {
  title: string;
  items: {
    label: string;
    value: number;
    icon?: React.ReactNode;
  }[];
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'pink' | 'cyan';
}

const colorClasses = {
  blue: {
    border: 'border-blue-500',
    bgGradient: 'from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950',
    hoverBg: 'from-blue-500/10 to-cyan-500/10',
    title: 'text-blue-700 dark:text-blue-300',
    iconBg: 'from-blue-500 to-cyan-500',
    textGradient: 'from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400',
    itemHoverBg: 'hover:bg-blue-100/50 dark:hover:bg-blue-900/20',
    bottomLine: 'from-blue-500 to-cyan-500',
  },
  green: {
    border: 'border-green-500',
    bgGradient: 'from-white via-green-50 to-emerald-50 dark:from-gray-900 dark:via-green-950 dark:to-emerald-950',
    hoverBg: 'from-green-500/10 to-emerald-500/10',
    title: 'text-green-700 dark:text-green-300',
    iconBg: 'from-green-500 to-emerald-500',
    textGradient: 'from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400',
    itemHoverBg: 'hover:bg-green-100/50 dark:hover:bg-green-900/20',
    bottomLine: 'from-green-500 to-emerald-500',
  },
  orange: {
    border: 'border-orange-500',
    bgGradient: 'from-white via-orange-50 to-amber-50 dark:from-gray-900 dark:via-orange-950 dark:to-amber-950',
    hoverBg: 'from-orange-500/10 to-amber-500/10',
    title: 'text-orange-700 dark:text-orange-300',
    iconBg: 'from-orange-500 to-amber-500',
    textGradient: 'from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400',
    itemHoverBg: 'hover:bg-orange-100/50 dark:hover:bg-orange-900/20',
    bottomLine: 'from-orange-500 to-amber-500',
  },
  purple: {
    border: 'border-purple-500',
    bgGradient: 'from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950',
    hoverBg: 'from-purple-500/10 to-blue-500/10',
    title: 'text-purple-700 dark:text-purple-300',
    iconBg: 'from-purple-500 to-blue-500',
    textGradient: 'from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400',
    itemHoverBg: 'hover:bg-purple-100/50 dark:hover:bg-purple-900/20',
    bottomLine: 'from-purple-500 to-blue-500',
  },
  pink: {
    border: 'border-pink-500',
    bgGradient: 'from-white via-pink-50 to-rose-50 dark:from-gray-900 dark:via-pink-950 dark:to-rose-950',
    hoverBg: 'from-pink-500/10 to-rose-500/10',
    title: 'text-pink-700 dark:text-pink-300',
    iconBg: 'from-pink-500 to-rose-500',
    textGradient: 'from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400',
    itemHoverBg: 'hover:bg-pink-100/50 dark:hover:bg-pink-900/20',
    bottomLine: 'from-pink-500 to-rose-500',
  },
  cyan: {
    border: 'border-cyan-500',
    bgGradient: 'from-white via-cyan-50 to-sky-50 dark:from-gray-900 dark:via-cyan-950 dark:to-sky-950',
    hoverBg: 'from-cyan-500/10 to-sky-500/10',
    title: 'text-cyan-700 dark:text-cyan-300',
    iconBg: 'from-cyan-500 to-sky-500',
    textGradient: 'from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400',
    itemHoverBg: 'hover:bg-cyan-100/50 dark:hover:bg-cyan-900/20',
    bottomLine: 'from-cyan-500 to-sky-500',
  },
};

const AnimatedValue = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (displayValue !== value) {
      const duration = 500;
      const steps = 20;
      const stepValue = (value - displayValue) / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(prev => prev + stepValue);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, displayValue]);

  return <>{Math.round(displayValue).toLocaleString()}</>;
};

export const CombinedCard = ({ title, items, color = 'purple' }: CombinedCardProps) => {
  const colors = colorClasses[color];

  return (
    <Card
      className={`relative overflow-hidden border-l-4 ${colors.border} hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-br ${colors.bgGradient} group`}
    >
      {/* 背景光效 */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colors.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <CardHeader className="pb-3 relative z-10">
        <CardTitle className={`text-sm font-bold ${colors.title} uppercase tracking-wide`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 relative z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 rounded-lg ${colors.itemHoverBg} transition-colors duration-200`}
          >
            <div className="flex items-center space-x-2">
              {item.icon && (
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${colors.iconBg} shadow-md group-hover:rotate-12 transition-transform duration-300`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
              )}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
            </div>
            <div className={`text-xl font-black bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
              <AnimatedValue value={item.value} />
            </div>
          </div>
        ))}
      </CardContent>

      {/* 底部装饰线 */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bottomLine} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      />
    </Card>
  );
};
