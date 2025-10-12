import { CommonLayout } from '@/components/layout/common-layout';
import BanLogList from './list';
import { FileX } from 'lucide-react';

export default function BanLog() {
  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <FileX className="h-3 w-3 text-white" />
          </div>
          <h2 className="text-lg font-bold text-purple-600">Ban Log Management</h2>
        </div>
      </div>
      <BanLogList />
    </CommonLayout>
  );
}
