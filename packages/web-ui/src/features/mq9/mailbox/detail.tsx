import { useParams, useNavigate, useRouterState } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Building2, MessageSquare, Clock, Info } from 'lucide-react';
import { getMailboxList, MailboxRaw } from '@/services/mqtt';
import { format } from 'date-fns';
import { CommonLayout } from '@/components/layout/common-layout';
import { useTranslation } from 'react-i18next';

export default function MailboxDetail() {
  const { t } = useTranslation();
  const { mailAddress } = useParams({ from: '/_authenticated/mq9/mailbox/$mailAddress' });
  const navigate = useNavigate();
  const routerState = useRouterState();
  const stateMailboxData = (routerState.location.state as any)?.mailboxData as MailboxRaw | undefined;

  const { data: fetchedMailbox, isLoading } = useQuery({
    queryKey: ['mailboxDetail', mailAddress],
    queryFn: async () => {
      const ret = await getMailboxList({ pagination: { offset: 0, limit: 1000 }, mail_address: mailAddress });
      return (ret.mailboxList || []).find((m: MailboxRaw) => m.mail_address === mailAddress) ?? null;
    },
    enabled: !stateMailboxData,
  });

  const mailbox: MailboxRaw | null | undefined = stateMailboxData ?? fetchedMailbox;

  if (!stateMailboxData && isLoading) {
    return (
      <CommonLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">{t('loading')}</div>
        </div>
      </CommonLayout>
    );
  }

  if (!mailbox) {
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg">{t('mailbox_not_found', { defaultValue: 'Mailbox not found' })}</div>
          <Button onClick={() => navigate({ to: '/mq9/mailbox' })}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back')}
          </Button>
        </div>
      </CommonLayout>
    );
  }

  const formattedCreateTime = (() => {
    try {
      const ct = mailbox.create_time;
      if (ct) {
        return format(new Date(ct * 1000), 'yyyy-MM-dd HH:mm:ss');
      }
    } catch {
      // ignore
    }
    return '-';
  })();

  const ttlDisplay = (() => {
    const ttl = mailbox.ttl;
    if (ttl === 0) return t('never_expires');
    if (ttl >= 86400) return `${Math.floor(ttl / 86400)} ${t('days')}`;
    return `${Math.floor(ttl / 3600)} ${t('hours')}`;
  })();

  return (
    <CommonLayout>
      <div className="container mx-auto p-6 space-y-6 pb-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-lg p-4 shadow-sm border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate({ to: '/mq9/mailbox' })}
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('back')}
              </Button>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 dark:bg-purple-500">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    {t('mail_address')}
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{mailbox.mail_address}</h1>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{mailbox.tenant}</p>
            </div>
          </div>
        </div>

        {/* Basic Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-purple-600" />
              <span>{t('basic_information')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {/* mail_address */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                    {t('mail_address')}
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {mailbox.mail_address || '-'}
                  </div>
                </div>
              </div>

              {/* tenant */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 mt-1">
                  <Building2 className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                    {t('tenant')}
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {mailbox.tenant || '-'}
                  </div>
                </div>
              </div>

              {/* desc */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {t('description')}
                  </label>
                  <div className="mt-1 text-sm break-all text-gray-900 dark:text-gray-100">
                    {mailbox.desc || '-'}
                  </div>
                </div>
              </div>

              {/* ttl */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {t('ttl')}
                  </label>
                  <div className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                    {ttlDisplay}
                  </div>
                </div>
              </div>

              {/* create_time */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {t('created_at')}
                  </label>
                  <div className="mt-1 text-sm font-mono text-gray-900 dark:text-gray-100">
                    {formattedCreateTime}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CommonLayout>
  );
}
