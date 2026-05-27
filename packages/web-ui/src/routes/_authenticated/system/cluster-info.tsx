import { createFileRoute } from '@tanstack/react-router';
import ClusterInfo from '@/features/system/cluster-info';

export const Route = createFileRoute('/_authenticated/system/cluster-info')({
  component: ClusterInfo,
});
