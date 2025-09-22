import { createFileRoute } from '@tanstack/react-router';
import BanLog from '@/features/system/ban-log';

export const Route = createFileRoute('/_authenticated/system/ban-log')({
  component: BanLog,
});
