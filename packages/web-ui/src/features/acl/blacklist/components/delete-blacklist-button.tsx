import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { deleteBlacklist, DeleteBlacklistRequest, BlacklistRaw } from '@/services/mqtt';

interface DeleteBlacklistButtonProps {
  blacklist: BlacklistRaw;
}

export function DeleteBlacklistButton({ blacklist }: DeleteBlacklistButtonProps) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (data: DeleteBlacklistRequest) => deleteBlacklist(data),
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Blacklist rule deleted successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['QueryBlacklistListData'] });
      setOpen(false);
    },
    onError: (error: any) => {
      // 错误信息已经在 requestApi 中显示了，这里不需要重复显示
      console.error('Failed to delete blacklist rule:', error);
    },
  });

  const handleDelete = () => {
    const deleteData: DeleteBlacklistRequest = {
      blacklist_type: blacklist.blacklist_type,
      resource_name: blacklist.resource_name,
      end_time: blacklist.end_time,
      desc: blacklist.desc,
    };
    deleteMutation.mutate(deleteData);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950 h-8 w-8 p-0 rounded-md"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Blacklist Rule</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this blacklist rule? This action cannot be undone.
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
              <div className="text-sm space-y-1">
                <div><span className="font-medium">Blacklist Type:</span> {blacklist.blacklist_type}</div>
                <div><span className="font-medium">Resource Name:</span> {blacklist.resource_name}</div>
                <div><span className="font-medium">Description:</span> {blacklist.desc || '-'}</div>
                <div><span className="font-medium">End Time:</span> {blacklist.end_time ? new Date(blacklist.end_time * 1000).toLocaleString() : '-'}</div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
