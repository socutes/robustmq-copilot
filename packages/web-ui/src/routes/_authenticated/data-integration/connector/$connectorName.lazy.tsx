import { createLazyFileRoute } from '@tanstack/react-router';
import ConnectorDetail from '@/features/data-integration/connector/detail';

export const Route = createLazyFileRoute('/_authenticated/data-integration/connector/$connectorName')({
  component: ConnectorDetail,
});
