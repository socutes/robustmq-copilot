import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Eye, FileCode, MessageSquare, Code } from 'lucide-react';
import { SchemaRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DetailSchemaButtonProps {
  schema: SchemaRaw;
}

const SCHEMA_TYPE_MAP = {
  json: 'JSON',
  avro: 'Avro',
  protobuf: 'Protobuf',
  xml: 'XML',
};

const getSchemaTypeBadgeStyle = (type: string) => {
  switch (type.toLowerCase()) {
    case 'json':
      return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm';
    case 'avro':
      return 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm';
    case 'protobuf':
      return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm';
    case 'xml':
      return 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-sm';
  }
};

export function DetailSchemaButton({ schema }: DetailSchemaButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="sm"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
        >
          <Eye className="mr-0.5 h-2.5 w-2.5" />
          Details
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-purple-600" />
            Schema Details
          </SheetTitle>
          <SheetDescription>View complete schema information</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-base">
                <FileCode className="h-4 w-4 text-purple-600" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Schema Name
                </label>
                <div className="text-sm font-mono break-all text-gray-900 dark:text-gray-100">{schema.name}</div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Schema Type
                </label>
                <div>
                  <Badge variant="default" className={getSchemaTypeBadgeStyle(schema.schema_type)}>
                    <Code className="mr-1 h-3 w-3" />
                    {SCHEMA_TYPE_MAP[schema.schema_type as keyof typeof SCHEMA_TYPE_MAP] || schema.schema_type}
                  </Badge>
                </div>
              </div>

              {schema.desc && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Description
                  </label>
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-4 w-4 text-gray-500 mt-0.5" />
                    <div className="text-sm text-gray-900 dark:text-gray-100">{schema.desc}</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Schema Definition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-base">
                <Code className="h-4 w-4 text-blue-600" />
                <span>Schema Definition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded border">
                <pre className="text-xs font-mono whitespace-pre-wrap overflow-auto max-h-96 text-gray-800 dark:text-gray-200">
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
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
