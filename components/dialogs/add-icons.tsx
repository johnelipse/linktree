"use client";

import type React from "react";

import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialPlatform } from "./add-icon";
import { useForm } from "react-hook-form";
import { HandleProps } from "@/types/type";
import { json } from "stream/consumers";
import { createHandle } from "@/actions/handle";
import { useRouter } from "next/navigation";

interface AddPlatformDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack: () => void;
  onAdd: (username: string) => void;
  trigger: React.ReactNode; // New prop for the dialog trigger
  platform: SocialPlatform;
}

export function AddPlatformDialog({
  open,
  onOpenChange,
  onBack,
  onAdd,
  trigger,
  platform,
}: AddPlatformDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HandleProps>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function submit(data: HandleProps) {
    data.name = platform.name;
    setIsSubmitting(true);
    try {
      await createHandle(data);
      router.push("/dashboard");
      router.refresh();
      setIsSubmitting(false);
      onOpenChange(false);
    } catch (error) {
      setIsSubmitting(false);
    }
  }

  const getPlaceholder = () => {
    switch (platform.name) {
      case "Threads":
        return "Enter Threads Username*";
      case "Instagram":
        return "Enter Instagram Username*";
      case "Facebook":
        return "Enter Facebook Username*";
      case "YouTube":
        return "Enter YouTube Channel*";
      case "X (formerly Twitter)":
        return "Enter X Username*";
      case "Tiktok":
        return "Enter Email Address*";
      default:
        return `Enter ${platform.name} Username*`;
    }
  };

  const getExample = () => {
    switch (platform.name) {
      case "Threads":
        return "@threadsusername";
      case "Instagram":
        return "@instagramusername";
      case "Facebook":
        return "@facebookusername or facebook.com/username";
      case "YouTube":
        return "@channelname or youtube.com/c/channelname";
      case "X (formerly Twitter)":
        return "@username";
      case "Tiktok":
        return "@tiktokusername";
      default:
        return `@${platform.name.toLowerCase()}username`;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="absolute left-4"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <DialogTitle className="flex-1 text-center">
            Add {platform.name} icon
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submit)} className="space-y-6 py-4">
          <div className="space-y-2">
            <Input
              placeholder={getPlaceholder()}
              //   value={username}
              //   onChange={(e) => setUsername(e.target.value)}
              className="h-12"
              {...register("userName", { required: true })}
            />
            {errors["userName"] && (
              <span className="text-xs text-red-700">field is required</span>
            )}
            <p className="text-sm text-muted-foreground pl-1">
              Example: {getExample()}
            </p>
          </div>

          <Button
            disabled={isSubmitting}
            className="w-full h-12 bg-[#9333ea] hover:bg-[#9333ea] text-white
             font-medium"
          >
            {isSubmitting ? "Adding..." : "Add"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
