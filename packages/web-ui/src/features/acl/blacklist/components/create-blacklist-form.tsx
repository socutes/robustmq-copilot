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
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';
import { createBlacklist, CreateBlacklistRequest } from '@/services/mqtt';

const BLACKLIST_TYPE_OPTIONS = [
  { value: 'ClientId', label: 'Client ID' },
  { value: 'User', label: 'User' },
  { value: 'Ip', label: 'IP Address' },
  { value: 'ClientIdMatch', label: 'Client ID Match' },
  { value: 'UserMatch', label: 'User Match' },
  { value: 'IPCIDR', label: 'IP CIDR' },
];

const formSchema = z.object({
  blacklist_type: z.string().min(1, 'Blacklist type is required'),
  resource_name: z.string().min(1, 'Resource name is required'),
  end_time: z.date({
    required_error: 'End time is required',
  }),
  desc: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CreateBlacklistFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateBlacklistForm({ open, onOpenChange }: CreateBlacklistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blacklist_type: '',
      resource_name: '',
      desc: '',
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: CreateBlacklistRequest) => createBlacklist(data),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Blacklist rule created successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['QueryBlacklistListData'] });
      onOpenChange(false);
      form.reset();
    },
    onError: (error: any) => {
      // 错误信息已经在 requestApi 中显示了，这里不需要重复显示
      console.error('Failed to create blacklist rule:', error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const createData: CreateBlacklistRequest = {
      blacklist_type: data.blacklist_type,
      resource_name: data.resource_name,
      end_time: Math.floor(data.end_time.getTime() / 1000), // 转换为时间戳（秒）
      desc: data.desc || '',
    };
    createMutation.mutate(createData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Blacklist Rule</DialogTitle>
          <DialogDescription>Add a new blacklist rule to block specific resources.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="blacklist_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blacklist Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select blacklist type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {BLACKLIST_TYPE_OPTIONS.map(option => (
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
              name="resource_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter resource name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="end_time"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Time</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick an end date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
                    <Textarea placeholder="Enter description for this blacklist rule" {...field} />
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
