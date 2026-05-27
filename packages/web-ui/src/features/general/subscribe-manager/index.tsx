import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { CommonLayout } from '@/components/layout/common-layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell } from 'lucide-react';
import SubscribeList from './list';
import { getTenantList } from '@/services/mqtt';

export default function SubscribeManager() {
  const { t } = useTranslation();
  const [selectedTenant, setSelectedTenant] = useState<string>('all');
  const [appliedTenant, setAppliedTenant] = useState<string>('all');

  const { data: tenantData } = useQuery({
    queryKey: ['TenantListForSubscribeFilter'],
    queryFn: () => getTenantList({ pagination: { offset: 0, limit: 200 } }),
  });
  const tenants = tenantData?.tenantList ?? [];

  const leftActions = useMemo(() => (
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
  ), [selectedTenant, tenants, t]);

  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Bell className="h-3 w-3 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-purple-600">{t('subscribe_management')}</h2>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <SubscribeList
          leftActions={leftActions}
          tenant={appliedTenant === 'all' ? undefined : appliedTenant}
          onSearch={() => setAppliedTenant(selectedTenant)}
        />
      </div>
    </CommonLayout>
  );
}
