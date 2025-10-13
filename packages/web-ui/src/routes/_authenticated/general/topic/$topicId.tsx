import { createFileRoute } from '@tanstack/react-router';
import TopicDetail from '@/features/general/topic/detail';

export const Route = createFileRoute('/_authenticated/general/topic/$topicId')({
  component: TopicDetail,
});
