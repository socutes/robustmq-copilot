import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Plus, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';
import { createSchemaBind, getSchemaListHttp } from '@/services/mqtt';

interface BindSchemaButtonProps {
  resourceName: string;
  boundSchemas?: string[];
}

export function BindSchemaButton({ resourceName, boundSchemas = [] }: BindSchemaButtonProps) {
  const [open, setOpen] = useState(false);
  const [selectedSchema, setSelectedSchema] = useState<string>('');
  const queryClient = useQueryClient();

  // 获取可用的 schema 列表
  const { data: schemaData } = useQuery({
    queryKey: ['schemaList'],
    queryFn: () => getSchemaListHttp(),
    enabled: open,
  });

  const createBindMutation = useMutation({
    mutationFn: createSchemaBind,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Schema binding created successfully!',
      });
      // 刷新 schema bind 列表
      queryClient.invalidateQueries({ queryKey: ['schemaBindList', resourceName] });
      setOpen(false);
      setSelectedSchema('');
    },
    onError: (error: any) => {
      console.error('Failed to create schema binding:', error);
      const errorMessage = error?.message || error?.toString() || 'Failed to create schema binding';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSchema) {
      toast({
        title: 'Error',
        description: 'Please select a schema',
        variant: 'destructive',
      });
      return;
    }

    createBindMutation.mutate({
      schema_name: selectedSchema,
      resource_name: resourceName,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="sm"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-sm"
        >
          <Plus className="mr-1 h-4 w-4" />
          Bind Schema
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px]"
        onOpenAutoFocus={e => e.preventDefault()}
        onCloseAutoFocus={e => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Bind Schema to Topic</DialogTitle>
          <DialogDescription>
            Select a schema to bind with topic <strong className="text-primary">{resourceName}</strong>.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <Label className="text-base font-semibold">Available Schemas</Label>
            {!schemaData?.schemasList?.length ? (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No schemas available</p>
                <p className="text-sm mt-1">Please create a schema first</p>
              </div>
            ) : (
              <ScrollArea className="h-[300px] pr-4">
                <RadioGroup value={selectedSchema} onValueChange={setSelectedSchema}>
                  <div className="space-y-2">
                    {schemaData.schemasList.map(schema => {
                      const isBound = boundSchemas.includes(schema.name);
                      return (
                        <label
                          key={schema.name}
                          htmlFor={schema.name}
                          className={`
                            flex items-start space-x-3 p-4 rounded-lg border-2 transition-all
                            ${isBound ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-900' : 'cursor-pointer'}
                            ${
                              !isBound && selectedSchema === schema.name
                                ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                : 'border-gray-200 dark:border-gray-800'
                            }
                            ${
                              !isBound && selectedSchema !== schema.name
                                ? 'hover:border-green-300 dark:hover:border-green-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                                : ''
                            }
                          `}
                        >
                          <RadioGroupItem value={schema.name} id={schema.name} className="mt-1" disabled={isBound} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <FileText
                                className={`h-4 w-4 flex-shrink-0 ${isBound ? 'text-gray-400' : 'text-green-600 dark:text-green-400'}`}
                              />
                              <span className={`font-semibold text-sm ${isBound ? 'text-gray-500' : ''}`}>
                                {schema.name}
                              </span>
                              {isBound && (
                                <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-300">
                                  Already Bound
                                </Badge>
                              )}
                              <Badge
                                variant="outline"
                                className={
                                  isBound
                                    ? 'ml-auto bg-gray-100 text-gray-500 border-gray-300'
                                    : 'ml-auto bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800'
                                }
                              >
                                {schema.schema_type}
                              </Badge>
                            </div>
                            {schema.desc && (
                              <p
                                className={`text-xs mt-1 line-clamp-2 ${isBound ? 'text-gray-400' : 'text-muted-foreground'}`}
                              >
                                {schema.desc}
                              </p>
                            )}
                          </div>
                          {!isBound && selectedSchema === schema.name && (
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                          )}
                        </label>
                      );
                    })}
                  </div>
                </RadioGroup>
              </ScrollArea>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false);
                setSelectedSchema('');
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createBindMutation.isPending || !selectedSchema}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
            >
              {createBindMutation.isPending ? 'Binding...' : 'Bind Schema'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
