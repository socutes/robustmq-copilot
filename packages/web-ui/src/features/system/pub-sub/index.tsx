import { CommonLayout } from '@/components/layout/common-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, Inbox } from 'lucide-react';

export default function PubSub() {
  return (
    <CommonLayout>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
            <MessageSquare className="h-3 w-3 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-blue-600">MQTT Pub/Sub Test</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-12rem)]">
        {/* Left Side - Publish Form */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="h-5 w-5 text-blue-600" />
              <span>Publish Message</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            {/* TODO: Add publish form here */}
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>Publish form will be added here</p>
            </div>
          </CardContent>
        </Card>

        {/* Right Side - Messages Display */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Inbox className="h-5 w-5 text-green-600" />
              <span>Received Messages</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full w-full">
              <div className="p-4 space-y-2">
                {/* TODO: Messages will be displayed here */}
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <p>No messages received yet</p>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </CommonLayout>
  );
}
