import { type SidebarData } from "@/utils/types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
        },
        {
          title: "PlacementCenter",
          url: "/general/placement-center",
        },
        {
          title: "SubscribeManager",
          url: "/general/subscribe-manager",
        },
      ],
    },
    {
      title: "ACL",
      items: [
        {
          title: "ClientAuthorize",
          url: "/acl/client-authorize",
        },
        {
          title: "ClientCertification",
          url: "/acl/client-certification",
        },
      ],
    },
  ],
};
