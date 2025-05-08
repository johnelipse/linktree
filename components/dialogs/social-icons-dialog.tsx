"use client";

import type React from "react";

import { useState } from "react";
import { GripVertical, PenLine, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AddSocialIconDialog } from "./add-icon";
import { Handle } from "@/lib/generated/prisma";
import { getIcon } from "@/lib/get-icon";
import { updateHandleBydId } from "@/actions/handle";
import { UpdateHandleProps } from "@/types/type";
import { useRouter } from "next/navigation";

export function SocialIconsDialog({ handles }: { handles: Handle[] }) {
  const [open, setOpen] = useState(false);
  const [iconPosition, setIconPosition] = useState("top");
  const [isopen, onOpenChange] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  async function handleUpdate(id: string, data: UpdateHandleProps) {
    try {
      setIsUpdating(true);
      await updateHandleBydId(data, id);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  }

  const handleTogglePublic = async (id: string, currentStatus: boolean) => {
    // Toggle the isPublic status
    await handleUpdate(id, { isPublic: !currentStatus });
  };

  const handleAddSocialIconClick = () => {
    setOpen(true);
    // onOpenChange(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Social icons</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-base font-semibold">
              Show visitors where to find you
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Add your social profiles, email and more as linked icons on your
              Linktree.
            </p>
          </div>

          <div className="space-y-4">
            {handles.map((handle) => (
              <div
                key={handle.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-muted-foreground" />
                  {getIcon(handle.name)}
                  <span>{handle.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <PenLine className="h-4 w-4" />
                  </Button>
                  <Switch
                    id={`public-toggle-${handle.id}`}
                    checked={handle.isPublic || false}
                    disabled={isUpdating}
                    onCheckedChange={() =>
                      handleTogglePublic(handle.id, handle.isPublic || false)
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-semibold text-muted-foreground">
              Social icon position
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Display icons at the top or bottom of your profile
            </p>

            <RadioGroup
              value={iconPosition}
              onValueChange={setIconPosition}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top" id="top" />
                <Label htmlFor="top">Top</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom" id="bottom" />
                <Label htmlFor="bottom">Bottom</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              See analytics
            </Button>
            <AddSocialIconDialog
              handleAddSocialIconClick={handleAddSocialIconClick}
              isopen={isopen}
              onOpenChange={onOpenChange}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
