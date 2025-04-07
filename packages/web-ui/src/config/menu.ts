import { IconChecklist, IconLayoutDashboard } from "@tabler/icons-react";
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";
import { type SidebarData } from "@/utils/types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: IconLayoutDashboard,
        },
        {
          title: "PlacementCenter",
          url: "/general/placement-center",
          icon: IconChecklist,
        },
        {
          title: "SubscribeManager",
          url: "/general/subscribe-manager",
          icon: IconChecklist,
        },
      ],
    },
    {
      title: "ACL",
      items: [
        {
          title: "ClientAuthorize",
          url: "/acl/client-authorize",
          icon: IconChecklist,
        },
        {
          title: "ClientCertification",
          url: "/acl/client-certification",
          icon: IconChecklist,
        },
      ],
    },
  ],
};
