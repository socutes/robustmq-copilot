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
import { createAutoSubscribe, CreateAutoSubscribeRequest } from '@/services/mqtt';

const QOS_OPTIONS = [
  { value: '0', label: 'QoS 0' },
  { value: '1', label: 'QoS 1' },
  { value: '2', label: 'QoS 2' },
];

const BOOLEAN_OPTIONS = [
  { value: 'true', label: 'True' },
  { value: 'false', label: 'False' },
];

const RETAINED_HANDLING_OPTIONS = [
  { value: '0', label: 'OnEverySubscribe' },
  { value: '1', label: 'OnNewSubscribe' },
  { value: '2', label: 'Never' },
];

const formSchema = z.object({
  topic: z.string().min(1, 'Topic is required'),
  qos: z.string().min(1, 'QoS is required'),
  no_local: z.string().min(1, 'No Local is required'),
  retain_as_published: z.string().min(1, 'Retain As Published is required'),
  retained_handling: z.string().min(1, 'Retained Handling is required'),
});

type FormData = z.infer<typeof formSchema>;

interface CreateAutoSubscribeFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateAutoSubscribeForm({ open, onOpenChange }: CreateAutoSubscribeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      qos: '',
      no_local: '',
      retain_as_published: '',
      retained_handling: '',
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: CreateAutoSubscribeRequest) => createAutoSubscribe(data),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Auto subscription rule created successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['QueryAutoSubscriptionListData'] });
      onOpenChange(false);
      form.reset();
    },
    onError: (error: any) => {
      // 错误信息已经在 requestApi 中显示了，这里不需要重复显示
      console.error('Failed to create auto subscription rule:', error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const createData: CreateAutoSubscribeRequest = {
      topic: data.topic,
      qos: parseInt(data.qos),
      no_local: data.no_local === 'true',
      retain_as_published: data.retain_as_published === 'true',
      retained_handling: parseInt(data.retained_handling),
    };
    createMutation.mutate(createData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Auto Subscription Rule</DialogTitle>
          <DialogDescription>Create a new automatic subscription rule for clients.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter topic pattern (e.g., system/+, sensor/#)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="qos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>QoS</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select QoS level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {QOS_OPTIONS.map(option => (
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
              name="no_local"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No Local</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select no local option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {BOOLEAN_OPTIONS.map(option => (
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
              name="retain_as_published"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retain As Published</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select retain as published option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {BOOLEAN_OPTIONS.map(option => (
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
              name="retained_handling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retained Handling</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select retained handling option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {RETAINED_HANDLING_OPTIONS.map(option => (
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
