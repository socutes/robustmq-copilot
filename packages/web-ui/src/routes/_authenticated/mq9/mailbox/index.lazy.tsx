import Mailbox from '@/features/mq9/mailbox';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/mq9/mailbox/')({
  component: Mailbox,
});
