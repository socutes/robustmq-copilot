import { createFileRoute } from '@tanstack/react-router';
import SystemAlarm from '@/features/advanced/system-alarm';

export const Route = createFileRoute('/_authenticated/advanced/system-alarm')({
  component: SystemAlarm,
});