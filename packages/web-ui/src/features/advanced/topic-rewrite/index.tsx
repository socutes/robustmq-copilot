import { CommonLayout } from '@/components/layout/common-layout';
import TopicRewriteList from './list';
import { FileEdit } from 'lucide-react';

export default function TopicRewrite() {
  return (
    <CommonLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <FileEdit className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-purple-600">Topic Rewrite Management</h2>
        </div>
      </div>
      <TopicRewriteList />
    </CommonLayout>
  );
}
