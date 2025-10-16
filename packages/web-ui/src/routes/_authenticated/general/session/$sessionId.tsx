import { createFileRoute } from '@tanstack/react-router';
import SessionDetail from '@/features/general/session/detail';

export const Route = createFileRoute('/_authenticated/general/session/$sessionId')({
  component: SessionDetail,
});
