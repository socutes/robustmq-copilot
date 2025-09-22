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
import { SystemAlarmRaw } from '@/services/mqtt';

interface ViewSystemAlarmButtonProps {
  systemAlarm: SystemAlarmRaw;
}

export function ViewSystemAlarmButton({ systemAlarm }: ViewSystemAlarmButtonProps) {
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
          <DialogTitle>System Alarm Details</DialogTitle>
          <DialogDescription>View the complete system alarm information</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Alarm Name</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="text-sm font-medium">{systemAlarm.name}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className={`text-sm font-medium ${systemAlarm.activated ? 'text-red-600' : 'text-green-600'}`}>
                {systemAlarm.activated ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Activated At</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="text-sm font-mono">{systemAlarm.activate_at || '-'}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Alarm Message</label>
            <div className="mt-1 p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <div className="text-sm whitespace-pre-wrap break-words">{systemAlarm.message || '-'}</div>
            </div>
          </div>

          {systemAlarm.activated && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
              <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">⚠️ Active Alarm</h4>
              <div className="text-xs text-red-700 dark:text-red-300">
                This alarm is currently active and requires attention. Please check the system status and take appropriate action.
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
