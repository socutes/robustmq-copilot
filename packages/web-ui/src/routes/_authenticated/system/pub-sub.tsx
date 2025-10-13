import { createFileRoute } from '@tanstack/react-router';
import PubSub from '@/features/system/pub-sub';

export const Route = createFileRoute('/_authenticated/system/pub-sub')({
  component: PubSub,
});
