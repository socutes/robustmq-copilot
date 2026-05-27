import { createFileRoute } from '@tanstack/react-router';
import MailboxDetail from '@/features/mq9/mailbox/detail';

export const Route = createFileRoute('/_authenticated/mq9/mailbox/$mailAddress')({
  component: MailboxDetail,
});
