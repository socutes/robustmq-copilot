import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { createSchemaBind, getSchemaListHttp } from '@/services/mqtt';

interface BindSchemaButtonProps {
  resourceName: string;
}

export function BindSchemaButton({ resourceName }: BindSchemaButtonProps) {
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
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Plus className="mr-1 h-4 w-4" />
          Bind Schema
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]" onOpenAutoFocus={e => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Bind Schema to Topic</DialogTitle>
          <DialogDescription>
            Create a binding between a schema and the topic <strong>{resourceName}</strong>.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="schema_name">Schema Name</Label>
            <Select value={selectedSchema} onValueChange={setSelectedSchema}>
              <SelectTrigger id="schema_name">
                <SelectValue placeholder="Select a schema" />
              </SelectTrigger>
              <SelectContent>
                {schemaData?.schemasList?.map(schema => (
                  <SelectItem key={schema.name} value={schema.name}>
                    <div className="flex flex-col">
                      <span className="font-medium">{schema.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {schema.schema_type} {schema.desc && `- ${schema.desc}`}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              disabled={createBindMutation.isPending}
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
