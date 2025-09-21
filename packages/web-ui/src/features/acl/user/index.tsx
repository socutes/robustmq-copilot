import { useState } from 'react';
import { CommonLayout } from '@/components/layout/common-layout';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';
import UserList from './list';
import { CreateUserForm } from './components/create-user-form';

export default function UserManagement() {
  const [createUserOpen, setCreateUserOpen] = useState(false);

  const extraActions = (
    <Button
      onClick={() => setCreateUserOpen(true)}
      size="sm"
      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
    >
      <Plus className="mr-2 h-4 w-4" />
      Create User
    </Button>
  );

  return (
    <CommonLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              User Management
            </h2>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <UserList extraActions={extraActions} />
      </div>

      <CreateUserForm open={createUserOpen} onOpenChange={setCreateUserOpen} />
    </CommonLayout>
  );
}
