import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { CommonLayout } from '@/components/layout/common-layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ListTodo } from 'lucide-react';
import TopicList from './list';
import { getTenantList } from '@/services/mqtt';

export default function Topic() {
  const { t } = useTranslation();
  const [selectedTenant, setSelectedTenant] = useState<string>('all');
  const [appliedTenant, setAppliedTenant] = useState<string>('all');
  const [selectedTopicType, setSelectedTopicType] = useState<string>('normal');
  const [appliedTopicType, setAppliedTopicType] = useState<string>('normal');

  const { data: tenantData } = useQuery({
    queryKey: ['TenantListForTopicFilter'],
    queryFn: () => getTenantList({ pagination: { offset: 0, limit: 200 } }),
  });
  const tenants = tenantData?.tenantList ?? [];

  const leftActions = useMemo(() => (
    <>
      <Select value={selectedTenant} onValueChange={setSelectedTenant}>
        <SelectTrigger className="w-[160px] h-8 text-sm">
          <SelectValue placeholder={t('all_tenants')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t('all_tenants')}</SelectItem>
          {tenants.map(tenant => (
            <SelectItem key={tenant.tenant_name} value={tenant.tenant_name}>
              {tenant.tenant_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={selectedTopicType} onValueChange={setSelectedTopicType}>
        <SelectTrigger className="w-[140px] h-8 text-sm">
          <SelectValue placeholder={t('all_types')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t('all_types')}</SelectItem>
          <SelectItem value="normal">{t('normal')}</SelectItem>
          <SelectItem value="system">{t('system')}</SelectItem>
        </SelectContent>
      </Select>
    </>
  ), [selectedTenant, selectedTopicType, tenants]);

  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <ListTodo className="h-3 w-3 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-purple-600">{t('topic_management')}</h2>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <TopicList
          leftActions={leftActions}
          tenant={appliedTenant === 'all' ? undefined : appliedTenant}
          topicType={appliedTopicType === 'all' ? undefined : appliedTopicType}
          onSearch={() => {
            setAppliedTenant(selectedTenant);
            setAppliedTopicType(selectedTopicType);
          }}
        />
      </div>
    </CommonLayout>
  );
}
