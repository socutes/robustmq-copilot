import {
  IconChecklist,
  IconLayoutDashboard,
  IconMessages,
  IconPackages,
  IconUsers,
} from "@tabler/icons-react";
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
          url: "/placement-center",
          icon: IconChecklist,
        },
        {
          title: "Apps",
          url: "/apps",
          icon: IconPackages,
        },
        {
          title: "Chats",
          url: "/chats",
          badge: "3",
          icon: IconMessages,
        },
        {
          title: "Users",
          url: "/users",
          icon: IconUsers,
        },
      ],
    },
  ],
};
