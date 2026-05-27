import Agent from '@/features/mq9/agent';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/mq9/agent/')({
  component: Agent,
});
