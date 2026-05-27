import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
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
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { createAcl, getTenantList } from '@/services/mqtt';
import { FileText, Shield } from 'lucide-react';

const createAclSchema = z.object({
  tenant: z.string().min(1, 'Tenant is required'),
  name: z.string().min(1, 'Name is required'),
  desc: z.string().optional(),
  resource_type: z.enum(['ClientId', 'User', 'Ip'], {
    required_error: 'Please select a resource type',
  }),
  resource_name: z.string().min(1, 'Resource name is required'),
  topic: z.string().optional(),
  ip: z.string().optional(),
  action: z.enum(['All', 'Publish', 'Subscribe'], {
    required_error: 'Please select an action',
  }),
  permission: z.enum(['Allow', 'Deny'], {
    required_error: 'Please select a permission',
  }),
});

type CreateAclFormData = z.infer<typeof createAclSchema>;

interface CreateAclFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateAclForm({ open, onOpenChange }: CreateAclFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { t } = useTranslation(['acl', 'common']);

  const { data: tenantData } = useQuery({
    queryKey: ['TenantListForAclCreate'],
    queryFn: () => getTenantList({ pagination: { offset: 0, limit: 200 } }),
  });
  const tenants = tenantData?.tenantList ?? [];

  const form = useForm<CreateAclFormData>({
    resolver: zodResolver(createAclSchema),
    defaultValues: {
      tenant: '',
      name: '',
      desc: '',
      resource_type: 'ClientId',
      resource_name: '*',
      topic: '*',
      ip: '*',
      action: 'All',
      permission: 'Allow',
    },
  });

  const createAclMutation = useMutation({
    mutationFn: createAcl,
    onSuccess: () => {
      toast({
        title: t('success', { ns: 'common' }),
        description: t('acl_created', { ns: 'acl' }),
      });
      queryClient.refetchQueries({ queryKey: ['QueryAclListData_all'], exact: false });
      form.reset();
      onOpenChange(false);
    },
    onError: (error: any) => {
      console.error('Failed to create ACL rule:', error);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const onSubmit = async (data: CreateAclFormData) => {
    setIsLoading(true);
    createAclMutation.mutate(data);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!isLoading) {
      onOpenChange(newOpen);
      if (!newOpen) form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[620px] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/40 dark:to-blue-950/40">
          <DialogTitle className="flex items-center gap-2 text-lg">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-sm">
              <Shield className="h-4 w-4 text-white" />
            </div>
            {t('create_acl_title', { ns: 'acl' })}
          </DialogTitle>
          <DialogDescription>{t('create_acl_desc', { ns: 'acl' })}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="px-6 py-5 space-y-6 max-h-[60vh] overflow-y-auto">

              {/* Section 1: Basic Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t('basic_info', { ns: 'acl' })}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-6">
                  <FormField
                    control={form.control}
                    name="tenant"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('tenant', { ns: 'common' })}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_tenant', { ns: 'common' })} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tenants.map(tenant => (
                              <SelectItem key={tenant.tenant_name} value={tenant.tenant_name}>
                                {tenant.tenant_name}
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
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('name', { ns: 'common' })}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('name', { ns: 'common' })} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pl-6">
                  <FormField
                    control={form.control}
                    name="desc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('description', { ns: 'common' })}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('description', { ns: 'common' })} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t" />

              {/* Section 2: ACL Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t('access_control', { ns: 'acl' })}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-6">
                  <FormField
                    control={form.control}
                    name="resource_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('resource_type', { ns: 'acl' })}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_type', { ns: 'acl' })} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ClientId">{t('client_id', { ns: 'acl' })}</SelectItem>
                            <SelectItem value="User">{t('username', { ns: 'acl' })}</SelectItem>
                            <SelectItem value="Ip">{t('ip_address', { ns: 'acl' })}</SelectItem>
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
                        <FormLabel>{t('resource_name', { ns: 'acl' })}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('client_placeholder', { ns: 'acl' })} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('resource_name', { ns: 'acl' })}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('topic_placeholder', { ns: 'acl' })} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('ip_address', { ns: 'acl' })}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('ip_placeholder', { ns: 'acl' })} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="action"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('action', { ns: 'acl' })}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_action', { ns: 'acl' })} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="All">{t('action_all', { ns: 'acl' })}</SelectItem>
                            <SelectItem value="Publish">{t('action_publish', { ns: 'acl' })}</SelectItem>
                            <SelectItem value="Subscribe">{t('action_subscribe', { ns: 'acl' })}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="permission"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('permission', { ns: 'acl' })}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_permission', { ns: 'acl' })} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Allow">{t('allow', { ns: 'acl' })}</SelectItem>
                            <SelectItem value="Deny">{t('deny', { ns: 'acl' })}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="px-6 py-4 border-t bg-gray-50 dark:bg-gray-900/50">
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)} disabled={isLoading}>
                {t('cancel', { ns: 'common' })}
              </Button>
              <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                {isLoading ? t('creating', { ns: 'acl' }) : t('create_acl_title', { ns: 'acl' })}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
