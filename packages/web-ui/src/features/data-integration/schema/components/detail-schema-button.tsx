import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Eye, FileCode, MessageSquare, Code, Link2, Tag, Trash2 } from 'lucide-react';
import { SchemaRaw, getSchemaBindList, deleteSchemaBind } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/hooks/use-toast';

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [topicToUnbind, setTopicToUnbind] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // 获取 Schema 绑定的 topics
  const { data: schemaBindData } = useQuery({
    queryKey: ['schemaBindBySchema', schema.name],
    queryFn: () => getSchemaBindList(undefined, schema.name),
    enabled: open && !!schema.name,
  });

  // 删除绑定 mutation
  const deleteBindMutation = useMutation({
    mutationFn: (topicName: string) =>
      deleteSchemaBind({
        schema_name: schema.name,
        resource_name: topicName,
      }),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Schema binding removed successfully',
      });
      // 刷新绑定列表
      queryClient.invalidateQueries({ queryKey: ['schemaBindBySchema', schema.name] });
      // 刷新可能受影响的 topic 详情页绑定列表
      queryClient.invalidateQueries({ queryKey: ['schemaBindList'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error?.message || 'Failed to remove schema binding',
        variant: 'destructive',
      });
    },
  });

  const handleDeleteClick = (topicName: string) => {
    setTopicToUnbind(topicName);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (topicToUnbind) {
      deleteBindMutation.mutate(topicToUnbind);
      setDeleteDialogOpen(false);
      setTopicToUnbind(null);
    }
  };

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

          {/* Bound Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-base">
                <Link2 className="h-4 w-4 text-green-600" />
                <span>Bound Topics</span>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({schemaBindData?.schemaBindList?.[0]?.data?.length || 0})
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!schemaBindData?.schemaBindList?.length || !schemaBindData.schemaBindList[0]?.data?.length ? (
                <div className="text-center py-8 text-muted-foreground">No bound topics found</div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">#</TableHead>
                        <TableHead>Topic Name</TableHead>
                        <TableHead className="w-[100px] text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schemaBindData.schemaBindList[0].data.map((topicName, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                            >
                              {index + 1}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                                <Tag className="h-3 w-3 text-green-600 dark:text-green-400" />
                              </div>
                              <span className="font-medium font-mono">{topicName}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center justify-center">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-200 rounded-md"
                                onClick={() => handleDeleteClick(topicName)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SheetContent>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Schema Binding</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to unbind schema <strong>"{schema.name}"</strong> from topic{' '}
              <strong>"{topicToUnbind}"</strong>?
              <br />
              <br />
              This action will remove the binding relationship between the schema and the topic.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleteBindMutation.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteBindMutation.isPending ? 'Removing...' : 'Remove Binding'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Sheet>
  );
}
