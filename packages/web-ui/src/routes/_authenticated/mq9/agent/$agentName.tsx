import { createFileRoute } from '@tanstack/react-router';
import AgentDetail from '@/features/mq9/agent/detail';

export const Route = createFileRoute('/_authenticated/mq9/agent/$agentName')({
  component: AgentDetail,
});
