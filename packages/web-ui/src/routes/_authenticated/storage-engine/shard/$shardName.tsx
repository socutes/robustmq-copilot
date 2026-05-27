import { createFileRoute } from '@tanstack/react-router';
import ShardDetail from '@/features/storage-engine/shard/detail';

export const Route = createFileRoute('/_authenticated/storage-engine/shard/$shardName')({
  component: ShardDetail,
});
