"use client";

import {
  BarChart,
  Link,
  MessageSquare,
  ShoppingBag,
  Users,
  Calendar,
  Instagram,
  HelpCircle,
  Bell,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export function DashboardSidebar() {
  return (
    <Sidebar className="border-r bg-[#ecece9]" collapsible="none">
      <SidebarHeader className="h-14 flex items-center px-4">
        <SidebarGroup>
          <div className="px-4 py-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="@johnelipse" />
                <AvatarFallback>JE</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1">
                <span className="font-medium">johnelipse</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                      <path d="M12 3v6" />
                    </svg>
                    <span>My Linktree</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="#" className="flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    <span>Links</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Shop</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Earn</span>
                    <Badge
                      variant="secondary"
                      className="ml-auto text-xs bg-purple-500 text-white"
                    >
                      New
                    </Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Audience</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    <span>Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs text-muted-foreground">
            Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Social planner</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    <span>Instagram auto-reply</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    <span>Link shortener</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between">
          <HelpCircle className="h-5 w-5 text-muted-foreground" />
          <Bell className="h-5 w-5 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
