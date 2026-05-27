import Shard from '@/features/storage-engine/shard';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/storage-engine/shard/')({
  component: Shard,
});
