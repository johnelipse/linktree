"use client";

import type * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Building2,
  ChevronDown,
  Home,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({
  className,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) {
  return (
    <div
      className={cn(
        "flex sticky top-0 z-10 flex-col h-screen border-r bg-[#004C74] text-white",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="TotalEnergies Logo"
            width={32}
            height={32}
            className="h-6 w-6"
          />
          {!isCollapsed && (
            <span className="text-lg font-bold">TotalEnergies</span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto text-white hover:bg-[#003a59] hover:text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isCollapsed && "rotate-180"
            )}
          />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <Home className="h-4 w-4" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
                  isCollapsed ? "justify-center" : ""
                )}
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-4 w-4" />
                  {!isCollapsed && <span>Regions & Branches</span>}
                </div>
                {!isCollapsed && (
                  <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
                )}
              </Button>
            </CollapsibleTrigger>
            {!isCollapsed && (
              <CollapsibleContent className="pl-10 pr-2">
                <nav className="grid gap-1">
                  <Link
                    href="/admin/regions"
                    className="rounded-lg px-2 py-1.5 text-sm transition-all hover:bg-[#003a59]"
                  >
                    Manage Regions
                  </Link>
                  <Link
                    href="/admin/branches"
                    className="rounded-lg px-2 py-1.5 text-sm transition-all hover:bg-[#003a59]"
                  >
                    Manage Branches
                  </Link>
                </nav>
              </CollapsibleContent>
            )}
          </Collapsible>
          <Link
            href="/admin/users"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <Users className="h-4 w-4" />
            {!isCollapsed && <span>User Management</span>}
          </Link>
          <Link
            href="/dashboard/products"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <Package className="h-4 w-4" />
            {!isCollapsed && <span>Products</span>}
          </Link>
          <Link
            href="/dashboard/categories"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <Package className="h-4 w-4" />
            {!isCollapsed && <span>Categories</span>}
          </Link>
          <Link
            href="/admin/orders"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <ShoppingCart className="h-4 w-4" />
            {!isCollapsed && <span>Orders</span>}
          </Link>
          <Link
            href="/admin/analytics"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
              isCollapsed ? "justify-center" : ""
            )}
          >
            <BarChart3 className="h-4 w-4" />
            {!isCollapsed && <span>Analytics</span>}
          </Link>
        </nav>
      </div>
      <div className="mt-auto border-t p-2">
        <Link
          href="/admin/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
            isCollapsed ? "justify-center" : ""
          )}
        >
          <Settings className="h-4 w-4" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <Link
          href="/logout"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#003a59]",
            isCollapsed ? "justify-center" : ""
          )}
        >
          <LogOut className="h-4 w-4" />
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
}
