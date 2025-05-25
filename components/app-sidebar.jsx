"use client";

import * as React from "react";
import {
  CameraIcon,
  ClipboardListIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Gem } from "lucide-react";
import { ChartBarStacked } from "lucide-react";
import { ChartNoAxesGantt } from "lucide-react";
import { BadgeEuro } from "lucide-react";
import { ClipboardMinus } from "lucide-react";

const data = {
  user: {
    name: "Ehsan",
    email: "Ehsan@admin.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: ChartBarStacked,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: ChartNoAxesGantt,
    },
    {
      title: "Sales",
      url: "/dashboard/sales",
      icon: BadgeEuro,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: SettingsIcon,
    },
  ],
  documents: [
    {
      name: "Today Sales",
      url: "/dashboard/reports/today-sales",
      icon: ClipboardMinus,
    },
    {
      name: "Weekly Sales",
      url: "/dashboard/reports/weekly-sales",
      icon: ClipboardListIcon,
    },
    {
      name: "Monthly Sales",
      url: "/dashboard/reports/monthly-sales",
      icon: FileIcon,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Gem className="h-5 w-5" />
                <span className="text-base font-semibold">
                  Inventory & Sales
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
