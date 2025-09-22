import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { SchemaRaw } from '@/services/mqtt';

interface ViewSchemaButtonProps {
  schema: SchemaRaw;
}

export function ViewSchemaButton({ schema }: ViewSchemaButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 h-8 px-3 rounded-md"
        >
          <Eye className="mr-1 h-4 w-4" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Schema Definition - {schema.name}</DialogTitle>
          <DialogDescription>View the complete schema definition</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded border">
            <pre className="text-sm font-mono whitespace-pre-wrap overflow-auto max-h-96 text-gray-800 dark:text-gray-200">
              {schema.schema
                ? (() => {
                    try {
                      // 尝试格式化 JSON
                      return JSON.stringify(JSON.parse(schema.schema), null, 2);
                    } catch {
                      // 如果不是有效的 JSON，直接显示原始内容
                      return schema.schema;
                    }
                  })()
                : 'No schema definition'}
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
