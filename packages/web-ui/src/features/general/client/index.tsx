import { CommonLayout } from '@/components/layout/common-layout';
import { Network } from 'lucide-react';
import ClientList from './list';

export default function Client() {
  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Network className="h-3 w-3 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Client Management
            </h2>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <ClientList />
      </div>
    </CommonLayout>
  );
}
