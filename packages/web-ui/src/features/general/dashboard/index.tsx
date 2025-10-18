import { CommonLayout } from '@/components/layout/common-layout';
import { SimpleLineChart } from './components/chart';
import { HeaderCard } from './components/card';
import { CombinedCard } from './components/combined-card';
import {
  Network,
  Hash,
  Bell,
  Download,
  Upload,
  User,
  Users,
  Crown,
  RefreshCw,
  Settings,
  Activity,
  Monitor,
} from 'lucide-react';
import { getOverviewMetricsData, getOverviewStatusData } from '@/services/mqtt';
import { useQuery } from '@tanstack/react-query';

export default function Dashboard() {
  const { data } = useQuery({
    queryKey: ['overview-metrics'],
    queryFn: getOverviewMetricsData,
    initialData: {
      connectionNum: [],
      topicNum: [],
      subscribeNum: [],
      messageInNum: [],
      messageOutNum: [],
      messageDropNum: [],
    },
    refetchInterval: 5000,
  });

  const { data: statusData } = useQuery({
    queryKey: ['overview-status'],
    queryFn: getOverviewStatusData,
    initialData: {
      clusterName: '',
      messageInRate: 0,
      messageOutRate: 0,
      connectionNum: 0,
      sessionNum: 0,
      topicNum: 0,
      nodesList: [],
      tcpConnectionNum: 0,
      tlsConnectionNum: 0,
      websocketConnectionNum: 0,
      quicConnectionNum: 0,
      subscribeNum: 0,
      exclusiveSubscribeNum: 0,
      shareSubscribeLeaderNum: 0,
      shareSubscribeResubNum: 0,
      exclusiveSubscribeThreadNum: 0,
      shareSubscribeLeaderThreadNum: 0,
      shareSubscribeFollowerThreadNum: 0,
    },
    refetchInterval: 5000,
  });

  return (
    <CommonLayout>
      <div className="mb-4 flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Monitor className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-purple-600">Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {/* 第一行：基础指标 */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <HeaderCard
            title="Connection"
            value={statusData.connectionNum}
            icon={<Network className="h-4 w-4" />}
            color="blue"
          />
          <HeaderCard
            title="Session"
            value={statusData.sessionNum}
            icon={<Monitor className="h-4 w-4" />}
            color="green"
          />
          <HeaderCard title="Topic" value={statusData.topicNum} icon={<Hash className="h-4 w-4" />} color="orange" />
          <HeaderCard
            title="Subscription"
            value={statusData.subscribeNum}
            icon={<Bell className="h-4 w-4" />}
            color="purple"
          />
        </div>

        {/* 第二行：高级指标 */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <CombinedCard
            title="Message Rate"
            color="cyan"
            items={[
              {
                label: 'In Rate',
                value: statusData.messageInRate,
                icon: <Download className="h-3 w-3" />,
              },
              {
                label: 'Out Rate',
                value: statusData.messageOutRate,
                icon: <Upload className="h-3 w-3" />,
              },
            ]}
          />
          <CombinedCard
            title="Exclusive Subscribe"
            color="pink"
            items={[
              {
                label: 'Subscriptions',
                value: statusData.exclusiveSubscribeNum,
                icon: <User className="h-3 w-3" />,
              },
              {
                label: 'Threads',
                value: statusData.exclusiveSubscribeThreadNum,
                icon: <Settings className="h-3 w-3" />,
              },
            ]}
          />
          <CombinedCard
            title="Share Subscribe Leader"
            color="green"
            items={[
              {
                label: 'Leaders',
                value: statusData.shareSubscribeLeaderNum,
                icon: <Crown className="h-3 w-3" />,
              },
              {
                label: 'Leader Threads',
                value: statusData.shareSubscribeLeaderThreadNum,
                icon: <Activity className="h-3 w-3" />,
              },
            ]}
          />
          <CombinedCard
            title="Share Subscribe Follower"
            color="orange"
            items={[
              {
                label: 'Resub',
                value: statusData.shareSubscribeResubNum,
                icon: <RefreshCw className="h-3 w-3" />,
              },
              {
                label: 'Follower Threads',
                value: statusData.shareSubscribeFollowerThreadNum,
                icon: <Users className="h-3 w-3" />,
              },
            ]}
          />
        </div>

        {/* 分割线 */}
        <div className="border-t border-purple-200 dark:border-purple-800"></div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <SimpleLineChart title="Message In (Count/Sec)" data={data?.messageInNum || []} color="cyan" />
          <SimpleLineChart title="Message Out (Count/Sec)" data={data?.messageOutNum || []} color="blue" />
          <SimpleLineChart title="Message Drop (Count/Sec)" data={data?.messageDropNum || []} color="orange" />
          <SimpleLineChart title="Connection (Count)" data={data?.connectionNum || []} color="green" />
          <SimpleLineChart title="Topic (Count)" data={data?.topicNum || []} color="purple" />
          <SimpleLineChart title="Subscription (Count)" data={data?.subscribeNum || []} color="pink" />
        </div>
      </div>
    </CommonLayout>
  );
}
