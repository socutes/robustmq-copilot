import { CommonLayout } from '@/components/layout/common-layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import ConnectorList from './list';
import { Plug, Plus } from 'lucide-react';

export default function Connector() {
  const navigate = useNavigate();

  const extraActions = (
    <Button
      onClick={() => navigate({ to: '/data-integration/connector/create' })}
      size="sm"
      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
    >
      <Plus className="mr-2 h-4 w-4" />
      Create Connector
    </Button>
  );

  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Plug className="h-3 w-3 text-white" />
          </div>
          <h2 className="text-lg font-bold text-purple-600">Connector Management</h2>
        </div>
      </div>
      <ConnectorList extraActions={extraActions} />
    </CommonLayout>
  );
}
