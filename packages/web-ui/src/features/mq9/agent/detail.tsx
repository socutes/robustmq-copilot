import { useParams, useNavigate, useRouterState } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bot, Building2, Clock, Code } from 'lucide-react';
import { getAgentList, AgentRaw } from '@/services/mqtt';
import { format } from 'date-fns';
import { CommonLayout } from '@/components/layout/common-layout';
import { useTranslation } from 'react-i18next';

export default function AgentDetail() {
  const { t } = useTranslation();
  const { agentName } = useParams({ from: '/_authenticated/mq9/agent/$agentName' });
  const navigate = useNavigate();
  const routerState = useRouterState();
  const stateAgentData = (routerState.location.state as any)?.agentData as AgentRaw | undefined;

  const { data: fetchedAgent, isLoading } = useQuery({
    queryKey: ['agentDetail', agentName],
    queryFn: async () => {
      const ret = await getAgentList({ pagination: { offset: 0, limit: 1000 } });
      return (ret.agentList || []).find((a: AgentRaw) => a.name === agentName) ?? null;
    },
    enabled: !stateAgentData,
  });

  const agent: AgentRaw | null | undefined = stateAgentData ?? fetchedAgent;

  if (!stateAgentData && isLoading) {
    return (
      <CommonLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">{t('loading')}</div>
        </div>
      </CommonLayout>
    );
  }

  if (!agent) {
    return (
      <CommonLayout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg">{t('agent_not_found', { defaultValue: 'Agent not found' })}</div>
          <Button onClick={() => navigate({ to: '/mq9/agent' })}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back')}
          </Button>
        </div>
      </CommonLayout>
    );
  }

  const formattedCreateTime = (() => {
    try {
      const ct = agent.create_time;
      if (ct) {
        return format(new Date(ct), 'yyyy-MM-dd HH:mm:ss');
      }
    } catch {
      // ignore
    }
    return '-';
  })();

  const renderAgentInfo = (agentInfo: string) => {
    try {
      return JSON.stringify(JSON.parse(agentInfo), null, 2);
    } catch {
      return agentInfo;
    }
  };

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
                onClick={() => navigate({ to: '/mq9/agent' })}
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('back')}
              </Button>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 dark:bg-purple-500">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    {t('agent_detail')}
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{agent.name}</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{agent.tenant}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 1: Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-purple-600" />
              <span>{t('basic_information', { defaultValue: 'Basic Information' })}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {/* name */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <div className="flex-shrink-0 mt-1">
                  <Bot className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                    {t('name')}
                  </label>
                  <div className="mt-1 text-sm font-mono break-all text-gray-900 dark:text-gray-100">
                    {agent.name || '-'}
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
                    {agent.tenant || '-'}
                  </div>
                </div>
              </div>

              {/* create_time */}
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
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

        {/* Card 2: Agent Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-yellow-600" />
              <span>{t('agent_info')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-xs font-mono bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-700 max-h-96 overflow-y-auto">
              {agent.agent_info ? renderAgentInfo(agent.agent_info) : '-'}
            </pre>
          </CardContent>
        </Card>
      </div>
    </CommonLayout>
  );
}
