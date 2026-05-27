import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getMailboxList, MailboxRaw } from '@/services/mqtt';
import { FilterValue } from '@/components/table/filter';
import { Clock, Building2, MessageSquare, Mail, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

interface MailboxListProps {
  leftActions?: React.ReactNode;
  tenant?: string;
  onSearch?: () => void;
}

export default function MailboxList({ leftActions, tenant, onSearch }: MailboxListProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const columns: ColumnDef<MailboxRaw>[] = [
    {
      accessorKey: 'mail_address',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('mail_address')} />,
      cell: ({ row }) => (
        <div className="flex items-center space-x-2 min-w-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 shrink-0">
            <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium truncate" title={row.original.mail_address}>
            {row.original.mail_address || '-'}
          </span>
        </div>
      ),
      enableSorting: true,
      size: 220,
      minSize: 160,
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
      accessorKey: 'desc',
      header: t('description'),
      cell: ({ row }) => (
        <div className="flex items-center space-x-1.5 min-w-0">
          <MessageSquare className="h-4 w-4 text-gray-500 shrink-0" />
          <span className="text-sm truncate" title={row.original.desc}>
            {row.original.desc || '-'}
          </span>
        </div>
      ),
      size: 200,
      maxSize: 280,
    },
    {
      accessorKey: 'ttl',
      header: t('ttl'),
      cell: ({ row }) => {
        const ttl = row.original.ttl;
        let display: string;
        if (ttl === 0) {
          display = t('never_expires');
        } else if (ttl >= 86400) {
          display = `${Math.floor(ttl / 86400)} ${t('days')}`;
        } else {
          display = `${Math.floor(ttl / 3600)} ${t('hours')}`;
        }
        return (
          <div className="flex items-center space-x-1.5">
            <Clock className="h-4 w-4 text-gray-500 shrink-0" />
            <span className="text-sm">{display}</span>
          </div>
        );
      },
      size: 120,
      maxSize: 160,
    },
    {
      accessorKey: 'create_time',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('created_at')} />,
      cell: ({ row }) => {
        const createTime = row.original.create_time;
        if (!createTime) return '-';
        try {
          const formattedTime = format(new Date(createTime * 1000), 'yyyy-MM-dd HH:mm:ss');
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
                to: '/mq9/mailbox/$mailAddress',
                params: { mailAddress: row.original.mail_address },
                state: { mailboxData: row.original } as any,
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
    const mailAddressVal = searchValue.find(f => f.field === 'mail_address' || f.field === '')?.valueList?.[0];
    try {
      const ret = await getMailboxList({
        pagination: { offset: pageIndex * pageSize, limit: pageSize },
        ...(tenant ? { tenant } : {}),
        ...(mailAddressVal ? { mail_address: mailAddressVal } : {}),
      });
      return {
        data: ret.mailboxList || [],
        totalCount: ret.totalCount || 0,
      };
    } catch (error) {
      console.error('Failed to fetch mailbox data:', error);
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
        queryKey={`QueryMailboxListData_${tenant ?? 'all'}`}
        defaultPageSize={20}
        defaultSorting={[{ id: 'create_time', desc: true }]}
        headerClassName="bg-purple-600 text-white"
        leftActions={leftActions}
        onSearch={onSearch}
        searchPlaceholder={t('search_by_mail_address')}
      />
    </div>
  );
}
