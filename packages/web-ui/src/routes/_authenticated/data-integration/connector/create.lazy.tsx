import { createLazyFileRoute } from '@tanstack/react-router';
import CreateConnector from '@/features/data-integration/connector/create';

export const Route = createLazyFileRoute('/_authenticated/data-integration/connector/create')({
  component: CreateConnector,
});
