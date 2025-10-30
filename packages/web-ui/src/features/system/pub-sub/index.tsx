import { CommonLayout } from '@/components/layout/common-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, Inbox, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState, useEffect, useRef } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { sendMessage, readMessages, getTopicListHttp, MessageItem } from '@/services/mqtt';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const formSchema = z
  .object({
    topicMode: z.enum(['existing', 'custom']),
    existingTopic: z.string().optional(),
    customTopic: z.string().optional(),
    content: z.string().min(1, { message: 'Content is required' }),
    retain: z.boolean(),
  })
  .refine(
    data => {
      if (data.topicMode === 'existing' && !data.existingTopic) {
        return false;
      }
      if (data.topicMode === 'custom' && !data.customTopic) {
        return false;
      }
      return true;
    },
    {
      message: 'Topic is required',
      path: ['existingTopic'],
    },
  );

type FormData = z.infer<typeof formSchema>;

export default function PubSub() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topicMode: 'existing',
      existingTopic: '',
      customTopic: '',
      content: '',
      retain: true,
    },
  });

  const topicMode = form.watch('topicMode');
  const existingTopic = form.watch('existingTopic');
  const customTopic = form.watch('customTopic');

  // Fetch available topics
  const { data: topicsData, isLoading: isLoadingTopics } = useQuery({
    queryKey: ['topicList'],
    queryFn: async () => {
      const response = await getTopicListHttp({
        pagination: { offset: 0, limit: 100 },
        topic_type: 'normal',
      } as any);
      return response.topicsList;
    },
  });

  // Set first available topic as default
  useEffect(() => {
    if (topicsData && topicsData.length > 0 && !form.getValues('existingTopic')) {
      form.setValue('existingTopic', topicsData[0].topic_name);
    }
  }, [topicsData, form]);

  // Sync selected topic from left panel to right panel
  useEffect(() => {
    if (topicMode === 'existing' && existingTopic) {
      setSelectedTopic(existingTopic);
    } else if (topicMode === 'custom' && customTopic) {
      setSelectedTopic(customTopic);
    }
  }, [topicMode, existingTopic, customTopic]);

  // Send message mutation
  const sendMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: (_data, variables) => {
      toast({
        title: (
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Send className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
            </div>
            <span>Message Sent Successfully!</span>
          </div>
        ),
        description: (
          <div className="flex items-start space-x-2 mt-2">
            <MessageSquare className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium">Topic: {variables.topic}</div>
              <div className="text-xs text-gray-500 mt-1">Your message has been published to the broker</div>
            </div>
          </div>
        ),
      });
      form.setValue('content', '');
      // Set the selected topic to the sent topic to view messages
      setSelectedTopic(variables.topic);
      // Refresh messages
      refreshMessages();
    },
    onError: (error: any) => {
      console.error('Failed to send message:', error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  // Fetch messages
  const { data: messagesData, refetch: refetchMessages } = useQuery({
    queryKey: ['messages', selectedTopic],
    queryFn: async () => {
      if (!selectedTopic) return [];
      const response = await readMessages({
        topic: selectedTopic,
        offset: 0,
      });
      return response;
    },
    enabled: !!selectedTopic,
    refetchInterval: selectedTopic ? 5000 : false, // Auto refresh every 5 seconds when topic is selected
  });

  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData);
    }
  }, [messagesData]);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const refreshMessages = () => {
    refetchMessages();
  };

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const topic = data.topicMode === 'existing' ? data.existingTopic : data.customTopic;

    if (!topic) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Topic is required',
      });
      setIsSubmitting(false);
      return;
    }

    sendMutation.mutate({
      topic,
      payload: data.content,
      retain: data.retain,
    });
  };

  return (
    <CommonLayout>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
            <MessageSquare className="h-3 w-3 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-blue-600">MQTT Pub/Sub Test</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-12rem)]">
        {/* Left Side - Publish Form */}
        <Card className="flex flex-col shadow-lg border-t-4 border-t-blue-500 overflow-hidden !gap-0 !py-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-b py-4">
            <CardTitle className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <Send className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Publish Message
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-6 bg-white dark:bg-gray-950">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Topic Mode Selection */}
                <FormField
                  control={form.control}
                  name="topicMode"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-base font-semibold text-gray-700 dark:text-gray-200">
                        Topic Selection Mode
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-6"
                        >
                          <div className="flex items-center space-x-2 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <RadioGroupItem value="existing" id="existing" />
                            <label htmlFor="existing" className="cursor-pointer text-sm font-medium">
                              Existing Topic
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <RadioGroupItem value="custom" id="custom" />
                            <label htmlFor="custom" className="cursor-pointer text-sm font-medium">
                              Custom Topic
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Existing Topic Dropdown */}
                {topicMode === 'existing' && (
                  <FormField
                    control={form.control}
                    name="existingTopic"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Select Topic
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          disabled={!topicsData || topicsData.length === 0}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 border-2 focus:border-blue-500 transition-colors">
                              <SelectValue
                                placeholder={
                                  isLoadingTopics
                                    ? 'Loading...'
                                    : !topicsData || topicsData.length === 0
                                      ? 'No topics available'
                                      : 'Select a topic'
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {topicsData?.map(topic => (
                              <SelectItem key={topic.topic_id} value={topic.topic_name}>
                                {topic.topic_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Custom Topic Input */}
                {topicMode === 'custom' && (
                  <FormField
                    control={form.control}
                    name="customTopic"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Custom Topic
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., sensor/temperature/room1"
                            className="h-11 border-2 focus:border-blue-500 transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs text-gray-500">
                          Enter a custom MQTT topic name
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Content */}
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Message Content
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Enter your message content here...&#10;&#10;Example:&#10;{&#10;  "temperature": 25.5,&#10;  "humidity": 60&#10;}'
                          className="min-h-[120px] resize-none border-2 focus:border-blue-500 transition-colors font-mono text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs text-gray-500">
                        The message payload to be published
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Retain */}
                <FormField
                  control={form.control}
                  name="retain"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Retain Message
                      </FormLabel>
                      <div className="flex h-11 items-center justify-between rounded-lg border-2 border-gray-200 dark:border-gray-700 px-4 bg-white dark:bg-gray-950">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{field.value ? 'Enabled' : 'Disabled'}</span>
                          <span className="text-xs text-gray-500">
                            {field.value ? '(Store on broker)' : '(No storage)'}
                          </span>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </div>
                      <FormDescription className="text-xs text-gray-500">
                        Enable to store this message on the broker for new subscribers
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Right Side - Messages Display */}
        <Card className="flex flex-col shadow-lg border-t-4 border-t-green-500 overflow-hidden !gap-0 !py-0">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-b py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-md">
                  <Inbox className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Received Messages
                </span>
              </div>
              {/* Topic Selector */}
              <div className="flex items-center space-x-2">
                <label className="text-xs font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">Topic:</label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger className="h-8 w-[200px] text-sm border-2 focus:border-green-500 transition-colors">
                    <SelectValue placeholder={isLoadingTopics ? 'Loading...' : 'Select topic'} />
                  </SelectTrigger>
                  <SelectContent>
                    {topicsData?.map(topic => (
                      <SelectItem key={topic.topic_id} value={topic.topic_name}>
                        {topic.topic_name}
                      </SelectItem>
                    ))}
                    {(!topicsData || topicsData.length === 0) && (
                      <SelectItem value="__empty__" disabled>
                        No topics available
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
            <ScrollArea className="h-[calc(100vh-20rem)] w-full">
              <div className="p-4 space-y-3">
                {!selectedTopic ? (
                  <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                    <Inbox className="h-16 w-16 mb-4 text-gray-300 dark:text-gray-700" />
                    <p className="text-lg font-medium">Select a topic to view messages</p>
                    <p className="text-sm text-gray-400 mt-1">Choose a topic from the dropdown above</p>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                    <Inbox className="h-16 w-16 mb-4 text-gray-300 dark:text-gray-700" />
                    <p className="text-lg font-medium">No messages found</p>
                    <p className="text-sm text-gray-400 mt-1">No messages in topic "{selectedTopic}"</p>
                  </div>
                ) : (
                  <>
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-3 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-semibold text-sm text-blue-600 dark:text-blue-400">
                              {selectedTopic}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                              Offset: {message.offset}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                            <Clock className="h-3 w-3" />
                            <span>{format(new Date(message.timestamp * 1000), 'yyyy-MM-dd HH:mm:ss')}</span>
                          </div>
                        </div>

                        <div className="text-sm bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 p-3 rounded-lg border border-gray-200 dark:border-gray-700 font-mono break-all">
                          {message.content}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </CommonLayout>
  );
}
