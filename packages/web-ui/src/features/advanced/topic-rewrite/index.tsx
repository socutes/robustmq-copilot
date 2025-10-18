import { useState } from 'react';
import { CommonLayout } from '@/components/layout/common-layout';
import TopicRewriteList from './list';
import { FileEdit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CreateTopicRewriteForm } from './components/create-topic-rewrite-form';

export default function TopicRewrite() {
  const [createTopicRewriteOpen, setCreateTopicRewriteOpen] = useState(false);

  const extraActions = (
    <Button
      onClick={() => setCreateTopicRewriteOpen(true)}
      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <Plus className="mr-2 h-4 w-4" />
      Create Topic Rewrite
    </Button>
  );

  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <FileEdit className="h-3 w-3 text-white" />
          </div>
          <h2 className="text-lg font-bold text-purple-600">Topic Rewrite Management</h2>
        </div>
      </div>
      <TopicRewriteList extraActions={extraActions} />
      <CreateTopicRewriteForm open={createTopicRewriteOpen} onOpenChange={setCreateTopicRewriteOpen} />
    </CommonLayout>
  );
}
