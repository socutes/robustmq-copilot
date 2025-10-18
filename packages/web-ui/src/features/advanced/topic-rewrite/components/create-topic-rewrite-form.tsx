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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';
import { createTopicRewrite, CreateTopicRewriteRequest } from '@/services/mqtt';

const ACTION_OPTIONS = [
  { value: 'All', label: 'All' },
  { value: 'Publish', label: 'Publish' },
  { value: 'Subscribe', label: 'Subscribe' },
];

const formSchema = z.object({
  action: z.string().min(1, 'Action is required'),
  source_topic: z.string().min(1, 'Source topic is required'),
  dest_topic: z.string().min(1, 'Destination topic is required'),
  regex: z.string().min(1, 'Regex pattern is required'),
});

type FormData = z.infer<typeof formSchema>;

interface CreateTopicRewriteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateTopicRewriteForm({ open, onOpenChange }: CreateTopicRewriteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      action: '',
      source_topic: '',
      dest_topic: '',
      regex: '',
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: CreateTopicRewriteRequest) => createTopicRewrite(data),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Topic rewrite rule created successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['QueryTopicRewriteListData'] });
      onOpenChange(false);
      form.reset();
    },
    onError: (error: any) => {
      // 错误信息已经在 requestApi 中显示了，这里不需要重复显示
      console.error('Failed to create topic rewrite rule:', error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const createData: CreateTopicRewriteRequest = {
      action: data.action,
      source_topic: data.source_topic,
      dest_topic: data.dest_topic,
      regex: data.regex,
    };
    createMutation.mutate(createData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Topic Rewrite Rule</DialogTitle>
          <DialogDescription>Create a new topic rewrite rule to transform topic names.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="action"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Action</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select action type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ACTION_OPTIONS.map(option => (
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
              name="source_topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Source Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter source topic (e.g., x/y/z/+)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dest_topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter destination topic (e.g., a/b/c/$1)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="regex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Regex Pattern</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter regex pattern (e.g., ^x/y/z/(.+)$)" {...field} />
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
