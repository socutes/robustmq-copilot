import { DataTable } from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';
import { getUserList } from '@/services/mqtt';
import { DeleteUserButton } from './components/delete-user-button';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

interface UserListProps {
  extraActions?: React.ReactNode;
}

export default function UserList({ extraActions }: UserListProps) {
  const columns: ColumnDef<any>[] = [
    {
      id: 'username',
      accessorKey: 'username',
      header: 'Username',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="font-medium">{row.original.username}</span>
        </div>
      ),
    },
    {
      accessorKey: 'isSuperUser',
      header: 'Role',
      cell: ({ row }) => (
        <Badge
          variant={row.original.isSuperUser ? 'default' : 'secondary'}
          className={
            row.original.isSuperUser
              ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
          }
        >
          {row.original.isSuperUser ? 'Super User' : 'Normal User'}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex items-center justify-end space-x-2">
          <DeleteUserButton username={row.original.username} isSuperUser={row.original.isSuperUser} />
        </div>
      ),
    },
  ];

  const fetchDataFn = async (pageIndex: number, pageSize: number) => {
    const ret = await getUserList({
      pagination: {
        offset: pageIndex * pageSize,
        limit: pageSize,
      },
    });
    return {
      data: ret.usersList,
      totalCount: ret.totalCount,
    };
  };

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        columns={columns}
        fetchDataFn={fetchDataFn}
        queryKey="QueryUserListData"
        extraActions={extraActions}
        headerClassName="bg-purple-600 text-white"
      />
    </div>
  );
}
