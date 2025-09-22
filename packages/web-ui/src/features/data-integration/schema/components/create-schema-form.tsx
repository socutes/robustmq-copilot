import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';
import { createSchema, CreateSchemaRequest } from '@/services/mqtt';

const SCHEMA_TYPE_OPTIONS = [
  { value: 'json', label: 'JSON' },
  { value: 'avro', label: 'Avro' },
  { value: 'protobuf', label: 'Protobuf' },
];

const formSchema = z.object({
  schema_name: z.string().min(1, 'Schema name is required'),
  schema_type: z.string().min(1, 'Schema type is required'),
  schema: z.string().min(1, 'Schema definition is required'),
  desc: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CreateSchemaFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateSchemaForm({ open, onOpenChange }: CreateSchemaFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schema_name: '',
      schema_type: '',
      schema: '',
      desc: '',
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: CreateSchemaRequest) => createSchema(data),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Schema created successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['QuerySchemaListData'] });
      onOpenChange(false);
      form.reset();
    },
    onError: (error: any) => {
      // 错误信息已经在 requestApi 中显示了，这里不需要重复显示
      console.error('Failed to create schema:', error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const createData: CreateSchemaRequest = {
      schema_name: data.schema_name,
      schema_type: data.schema_type,
      schema: data.schema,
      desc: data.desc || '',
    };
    createMutation.mutate(createData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Schema</DialogTitle>
          <DialogDescription>Create a new schema definition for data validation.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="schema_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schema Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter schema name (e.g., sensor_data_schema)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="schema_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schema Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select schema type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SCHEMA_TYPE_OPTIONS.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter description for this schema" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="schema"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schema Definition</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter schema definition (JSON, Avro, Protobuf, etc.)&#10;&#10;Example for JSON Schema:&#10;{&#10;  "type": "object",&#10;  "properties": {&#10;    "temperature": {&#10;      "type": "number",&#10;      "minimum": -50,&#10;      "maximum": 100&#10;    }&#10;  }&#10;}'
                      rows={45}
                      className="font-mono text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
