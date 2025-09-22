import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface CardProps {
  title: string;
  value: number;
  description?: string;
  icon?: React.ReactNode;
}

export const HeaderCard = ({ title, value, description, icon }: CardProps) => {
  return (
    <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{value.toLocaleString()}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};
