import { createLazyFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/storage-engine/segment/')({
  component: () => <Navigate to="/storage-engine/shard" replace />,
});
