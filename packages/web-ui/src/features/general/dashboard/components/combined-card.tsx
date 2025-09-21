import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface CombinedCardProps {
  title: string;
  items: {
    label: string;
    value: number;
    icon?: React.ReactNode;
  }[];
}

export const CombinedCard = ({ title, items }: CombinedCardProps) => {
  return (
    <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {item.icon && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800">
                  {item.icon}
                </div>
              )}
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{item.value.toLocaleString()}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
