import { createFileRoute } from '@tanstack/react-router';
import SubscribeDetail from '@/features/general/subscribe/detail';

export const Route = createFileRoute('/_authenticated/general/subscribe/$subscribeId')({
  component: SubscribeDetail,
});
