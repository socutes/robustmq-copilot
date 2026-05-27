import { type SidebarData } from '@/utils/types';
import {
  LayoutDashboard,
  Network,
  UserRound,
  ListTodo,
  Bell,
  Users,
  Shield,
  UserX,
  Cable,
  Database,
  Zap,
  FileEdit,
  Settings,
  MessageSquare,
  Building2,
  ScrollText,
} from 'lucide-react';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      items: [
        {
          title: 'overview',
          url: '/',
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: 'general',
      items: [
        {
          title: 'client',
          url: '/general/client',
          icon: Network,
        },
        {
          title: 'session',
          url: '/general/session',
          icon: UserRound,
        },
        {
          title: 'topic',
          url: '/general/topic',
          icon: ListTodo,
        },
        {
          title: 'subscribe',
          url: '/general/subscribe-manager',
          icon: Bell,
        },
      ],
    },
    {
      title: 'access_control',
      items: [
        {
          title: 'user',
          url: '/acl/user-management',
          icon: Users,
        },
        {
          title: 'acl',
          url: '/acl/acl-management',
          icon: Shield,
        },
        {
          title: 'blacklist',
          url: '/acl/blacklist-management',
          icon: UserX,
        },
      ],
    },
    {
      title: 'data_integration',
      items: [
        {
          title: 'connector',
          url: '/data-integration/connector',
          icon: Cable,
        },
        {
          title: 'schema',
          url: '/data-integration/schema',
          icon: Database,
        },
      ],
    },
    {
      title: 'advanced',
      items: [
        {
          title: 'auto_subscription',
          url: '/advanced/auto-subscription',
          icon: Zap,
        },
        {
          title: 'topic_rewrite',
          url: '/advanced/topic-rewrite',
          icon: FileEdit,
        },
      ],
    },
    {
      title: 'system',
      items: [
        {
          title: 'tenant',
          url: '/system/tenant',
          icon: Building2,
        },
        {
          title: 'pub_sub',
          url: '/system/pub-sub',
          icon: MessageSquare,
        },
        {
          title: 'system_log',
          url: '/system/system-log',
          icon: ScrollText,
        },
        {
          title: 'configuration',
          url: '/system/configuration',
          icon: Settings,
        },
      ],
    },
  ],
};
