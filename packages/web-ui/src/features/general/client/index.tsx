import { CommonLayout } from '@/components/layout/common-layout';
import { Network } from 'lucide-react';
import ClientList from './list';

export default function Client() {
  return (
    <CommonLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
            <Network className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
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
