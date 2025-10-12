import { createLazyFileRoute } from '@tanstack/react-router';
import ClientDetail from '@/features/general/client/detail';

export const Route = createLazyFileRoute('/_authenticated/general/client/$clientId')({
  component: ClientDetail,
});
