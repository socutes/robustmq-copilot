import { createFileRoute } from '@tanstack/react-router';
import Configuration from '@/features/system/configuration';

export const Route = createFileRoute('/_authenticated/system/configuration')({
  component: Configuration,
});
