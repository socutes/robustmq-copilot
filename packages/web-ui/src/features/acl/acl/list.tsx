import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getAclListHttp, AclRaw } from '@/services/mqtt';
import { Badge } from '@/components/ui/badge';
import { Shield, User, Hash, Globe, Lock, Check, X } from 'lucide-react';
import { DeleteAclButton } from './components/delete-acl-button';

interface AclListProps {
  extraActions?: React.ReactNode;
}

export default function AclList({ extraActions }: AclListProps) {
  const columns: ColumnDef<AclRaw>[] = [
    {
      id: 'resource_type',
      accessorKey: 'resource_type',
      header: 'Resource Type',
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
        >
          <Shield className="mr-1 h-3 w-3" />
          {row.original.resource_type}
        </Badge>
      ),
    },
    {
      accessorKey: 'resource_name',
      header: 'Resource Name',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium">{row.original.resource_name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'topic',
      header: 'Topic',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Hash className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.topic || '-'}</span>
        </div>
      ),
    },
    {
      accessorKey: 'ip',
      header: 'IP Address',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="font-mono text-sm">{row.original.ip || '-'}</span>
        </div>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          <Lock className="mr-1 h-3 w-3" />
          {row.original.action}
        </Badge>
      ),
    },
    {
      accessorKey: 'permission',
      header: 'Permission',
      cell: ({ row }) => (
        <Badge
          variant={row.original.permission === 'Allow' ? 'default' : 'destructive'}
          className={
            row.original.permission === 'Allow'
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm'
              : 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm'
          }
        >
          {row.original.permission === 'Allow' ? <Check className="mr-1 h-3 w-3" /> : <X className="mr-1 h-3 w-3" />}
          {row.original.permission}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => <DeleteAclButton acl={row.original} />,
      size: 100,
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    const ret = await getAclListHttp({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
    });
    return {
      data: ret.aclsList,
      totalCount: ret.totalCount,
    };
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QueryAclListData"
        headerClassName="bg-purple-600 text-white"
        extraActions={extraActions}
      />
    </div>
  );
}
