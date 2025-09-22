import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { TopicRewriteRaw } from '@/services/mqtt';

interface ViewTopicRewriteButtonProps {
  topicRewrite: TopicRewriteRaw;
}

export function ViewTopicRewriteButton({ topicRewrite }: ViewTopicRewriteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 h-8 px-3 rounded-md"
        >
          <Eye className="mr-1 h-4 w-4" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Topic Rewrite Rule Details</DialogTitle>
          <DialogDescription>View the complete topic rewrite rule configuration</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Source Topic</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="text-sm font-mono">{topicRewrite.source_topic}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Destination Topic</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="text-sm font-mono">{topicRewrite.dest_topic}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Regex Pattern</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="text-sm font-mono break-all">{topicRewrite.regex}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Action</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="text-sm">{topicRewrite.action}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Example Transformation</h4>
            <div className="text-xs font-mono space-y-1">
              <div className="text-gray-600 dark:text-gray-400">Source Pattern: {topicRewrite.source_topic}</div>
              <div className="text-gray-600 dark:text-gray-400">Destination: {topicRewrite.dest_topic}</div>
              <div className="text-blue-700 dark:text-blue-300">
                Example: {topicRewrite.source_topic.replace(/\+/g, 'example').replace(/#/g, 'data')} →{' '}
                {topicRewrite.dest_topic.replace(/\$1/g, 'example')}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
