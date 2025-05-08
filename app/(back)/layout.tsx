import { DashboardSidebar } from "@/components/backend/dashboard-sideba";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

export default function BackendLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full bg-[#f3f3f1]">
        <DashboardSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
