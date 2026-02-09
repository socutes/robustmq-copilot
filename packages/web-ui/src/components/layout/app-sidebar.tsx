import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavGroup } from '@/components/layout/nav-group';
import { TeamSwitcher } from '@/components/layout/team-switcher';
import { sidebarData } from '@/config/menu';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((group, index) => (
          <NavGroup key={group.title || `nav-group-${index}`} {...group} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
