import { DashboardSidebar } from "@/components/backend/dashboard-sideba";
import { SidebarProvider } from "@/components/ui/sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function BackendLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/register");
  }
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full bg-[#f3f3f1]">
        <DashboardSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
