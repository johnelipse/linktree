"use client";

import type React from "react";

import { useState } from "react";
import { ArrowLeft, ChevronRight, Search, Plus } from "lucide-react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { AddPlatformDialog } from "./add-icons";

export interface SocialPlatform {
  name: string;
  icon: React.ReactNode;
}

export function AddSocialIconDialog({
  isopen,
  onOpenChange,
  onBack,
  handleAddSocialIconClick,
}: {
  isopen: boolean;
  onOpenChange: (open: boolean) => void;
  onBack?: () => void;
  handleAddSocialIconClick: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

  const [data, setData] = useState<SocialPlatform | undefined>();

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };
  const handleBack = () => {
    // In a real app, this might navigate back to a platform selection screen
    console.log("Going back to platform selection");
  };

  const handleAdd = (username: string) => {
    console.log(`Added ${selectedPlatform} with username: ${username}`);
    // Here you would typically save this to your database or state
  };

  const socialPlatforms: SocialPlatform[] = [
    {
      name: "Instagram",
      icon: <FaInstagramSquare className="h-5 w-5" />,
    },
    { name: "Tiktok", icon: <FaTiktok className="h-5 w-5" /> },
    { name: "Facebook", icon: <FaFacebook className="h-5 w-5" /> },
    { name: "YouTube", icon: <FaYoutube className="h-5 w-5" /> },
    {
      name: "X (formerly Twitter)",
      icon: <FaXTwitter className="h-5 w-5" />,
    },
  ];

  const filteredPlatforms = socialPlatforms.filter((platform) =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle platform selection and open the add platform dialog
  const handlePlatformClick = (platform: SocialPlatform) => {
    setData(platform);
    setSelectedPlatform(platform.name);
    setOpen(true);
  };

  return (
    <Dialog open={isopen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add social icon
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAddSocialIconClick}
            className="absolute left-4"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <DialogTitle className="flex-1 text-center">
            Add social icon
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-9 bg-muted/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            {filteredPlatforms.map((platform, i) => {
              return (
                <AddPlatformDialog
                  platform={platform} // Pass the platform directly
                  key={i}
                  open={open && selectedPlatform === platform.name}
                  onOpenChange={handleOpenChange}
                  onBack={handleBack}
                  onAdd={handleAdd}
                  trigger={
                    <Button
                      variant="ghost"
                      className="w-full justify-between px-2 py-6"
                      onClick={() => handlePlatformClick(platform)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center">
                          {platform.icon}
                        </div>
                        <span>{platform.name}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  }
                />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
