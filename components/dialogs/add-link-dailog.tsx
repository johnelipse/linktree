"use client";
import { getMetaData } from "@/actions/meta";
import { createUrl } from "@/actions/url";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LinkProps } from "@/types/type";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function AddLink() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkProps>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function submit(data: LinkProps) {
    const linkData = await getMetaData(data.link);
    const ogImage = linkData["og:image"];
    data.url = linkData.url;
    data.title = linkData.title;
    data.image = ogImage;
    setLoading(true);
    try {
      await createUrl(data);
      setLoading(false);
      reset();
      setOpen(false);
      router.push("/dashboard");
      router.prefetch("/dashboard");
      router.refresh();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 h-12">
          <Plus className="h-5 w-5 mr-2" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Your Personal URLs</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(submit)} className="grid gap-4 py-4">
          <div className="grid gap-4">
            <Input
              id="link"
              placeholder="enter url"
              className="col-span-3"
              {...register("link", { required: true })}
            />
            {errors["link"] && (
              <span className="text-xs text-red-700">
                This field is required
              </span>
            )}
          </div>
          <DialogFooter>
            <Button
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700"
              type="submit"
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
