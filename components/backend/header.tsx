"use client";
import { Bell, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
      <div className={cn("w-full flex-1", isCollapsed ? "ml-0" : "")}>
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <Button variant="outline" size="icon" className="relative">
        <Bell className="h-4 w-4" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E30613] text-[10px] font-medium text-white">
          3
        </span>
        <span className="sr-only">Notifications</span>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Avatar"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </header>
  );
}
