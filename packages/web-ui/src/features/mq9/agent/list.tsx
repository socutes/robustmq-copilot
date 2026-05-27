import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getAgentList, AgentRaw } from '@/services/mqtt';
import { FilterValue } from '@/components/table/filter';
import { Clock, Building2, Bot, Code, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

interface AgentListProps {
  leftActions?: React.ReactNode;
  tenant?: string;
  onSearch?: () => void;
}

export default function AgentList({ leftActions, tenant, onSearch }: AgentListProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const columns: ColumnDef<AgentRaw>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('name')} />,
      cell: ({ row }) => (
        <div className="flex items-center space-x-2 min-w-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 shrink-0">
            <Bot className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium truncate" title={row.original.name}>
            {row.original.name || '-'}
          </span>
        </div>
      ),
      enableSorting: true,
      size: 200,
      minSize: 150,
    },
    {
      accessorKey: 'tenant',
      header: t('tenant'),
      cell: ({ row }) => (
        <div className="flex items-center space-x-1.5 min-w-0">
          <Building2 className="h-4 w-4 text-gray-500 shrink-0" />
          <span className="text-sm truncate" title={row.original.tenant}>
            {row.original.tenant || '-'}
          </span>
        </div>
      ),
      size: 120,
      maxSize: 160,
    },
    {
      accessorKey: 'agent_info',
      header: t('agent_info'),
      cell: ({ row }) => {
        const info = row.original.agent_info || '';
        const preview = info.length > 50 ? info.slice(0, 50) + '...' : info;
        return (
          <div className="flex items-center space-x-1.5 min-w-0">
            <Code className="h-4 w-4 text-gray-500 shrink-0" />
            <span className="text-sm font-mono truncate" title={info}>
              {preview || '-'}
            </span>
          </div>
        );
      },
      size: 260,
      maxSize: 340,
    },
    {
      accessorKey: 'create_time',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('created_at')} />,
      cell: ({ row }) => {
        const createTime = row.original.create_time;
        if (!createTime) return '-';
        try {
          const formattedTime = format(new Date(createTime), 'yyyy-MM-dd HH:mm:ss');
          return (
            <div className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4 text-gray-500 shrink-0" />
              <span className="text-sm font-mono">{formattedTime}</span>
            </div>
          );
        } catch {
          return '-';
        }
      },
      enableSorting: true,
      size: 180,
      maxSize: 200,
    },
    {
      id: 'actions',
      header: t('actions'),
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-1.5 py-0.5 h-6 text-[11px]"
            onClick={() => {
              navigate({
                to: '/mq9/agent/$agentName',
                params: { agentName: row.original.name },
                state: { agentData: row.original },
              });
            }}
          >
            <Eye className="mr-0.5 h-2.5 w-2.5" />
            {t('details_btn')}
          </Button>
        </div>
      ),
      size: 80,
      maxSize: 100,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number, searchValue: FilterValue[]) => {
    const nameVal = searchValue.find(f => f.field === 'name' || f.field === '')?.valueList?.[0];
    try {
      const ret = await getAgentList({
        pagination: { offset: pageIndex * pageSize, limit: pageSize },
        ...(tenant ? { tenant } : {}),
        ...(nameVal ? { name: nameVal } : {}),
      });
      return {
        data: ret.agentList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch agent data:', error);
      return {
        data: [],
        totalCount: 0,
      };
    }
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey={`QueryAgentListData_${tenant ?? 'all'}`}
        defaultPageSize={20}
        defaultSorting={[{ id: 'create_time', desc: true }]}
        headerClassName="bg-purple-600 text-white"
        leftActions={leftActions}
        onSearch={onSearch}
        searchPlaceholder={t('search_by_agent_name')}
      />
    </div>
  );
}
