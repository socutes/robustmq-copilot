import { CommonLayout } from '@/components/layout/common-layout';
import { MessageSquare } from 'lucide-react';

export default function PubSub() {
  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
            <MessageSquare className="h-3 w-3 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-blue-600">Pub Sub</h2>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
        <iframe
          src="https://mqttx.app/web-client#/recent_connections/a50f45c9-a587-4aa5-85b9-70becab6eca7"
          className="w-full h-[calc(100vh-12rem)]"
          title="MQTTX Web Client"
          style={{ border: 'none' }}
        />
      </div>
    </CommonLayout>
  );
}
