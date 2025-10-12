import { useState } from 'react';
import { CommonLayout } from '@/components/layout/common-layout';
import SchemaList from './list';
import { FileCode, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CreateSchemaForm } from './components/create-schema-form';

export default function Schema() {
  const [createSchemaOpen, setCreateSchemaOpen] = useState(false);

  const extraActions = (
    <Button
      onClick={() => setCreateSchemaOpen(true)}
      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <Plus className="mr-2 h-4 w-4" />
      Create Schema
    </Button>
  );

  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <FileCode className="h-3 w-3 text-white" />
          </div>
          <h2 className="text-lg font-bold text-purple-600">Schema Management</h2>
        </div>
      </div>
      <SchemaList extraActions={extraActions} />
      <CreateSchemaForm open={createSchemaOpen} onOpenChange={setCreateSchemaOpen} />
    </CommonLayout>
  );
}
