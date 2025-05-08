"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Info, Copy, Edit, MoreHorizontal, Check, X } from "lucide-react";
import { SocialIconsDialog } from "../dialogs/social-icons-dialog";
import { Handle, LinkUrl } from "@/lib/generated/prisma";
import { getIcon } from "@/lib/get-icon";
import { AddLink } from "../dialogs/add-link-dailog";
import { Switch } from "../ui/switch";
import { UpdateLinkProps } from "@/types/type";
import { updateUrlBydId } from "@/actions/url";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";

export function LinksContent({
  handles,
  urls,
}: {
  handles: Handle[];
  urls: LinkUrl[];
}) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [editingLinkId, setEditingLinkId] = useState<string | null>(null);

  // State to store temporary values while editing
  const [tempTitle, setTempTitle] = useState("");
  const [tempLink, setTempLink] = useState("");

  // State to track if an update is in progress
  // const [isUpdating, setIsUpdating] = useState(false);

  // Start editing title
  const handleEditTitle = (url: LinkUrl) => {
    setEditingTitleId(url.id);
    setTempTitle(url.title);
  };

  // Start editing link
  const handleEditLink = (url: LinkUrl) => {
    setEditingLinkId(url.id);
    setTempLink(url.link);
  };

  // Save title changes
  const handleSaveTitle = (id: string) => {
    handleUpdate(id, { title: tempTitle });
    setEditingTitleId(null);
  };

  // Save link changes
  const handleSaveLink = (id: string) => {
    handleUpdate(id, { link: tempLink });
    setEditingLinkId(null);
  };

  // Cancel editing
  const handleCancelTitleEdit = () => {
    setEditingTitleId(null);
  };

  const handleCancelLinkEdit = () => {
    setEditingLinkId(null);
  };

  async function handleUpdate(id: string, data: UpdateLinkProps) {
    try {
      setIsUpdating(true);
      await updateUrlBydId(data, id);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  }

  const handleTogglePublic = async (id: string, currentStatus: boolean) => {
    await handleUpdate(id, { isPublic: !currentStatus });
  };

  return (
    <div className="space-y-6">
      <Alert className="bg-blue-50 border-blue-100">
        <Info className="h-4 w-4 text-blue-500" />
        <AlertDescription className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            <span className="text-orange-500">🔥</span> Your Linktree is live:
            <span className="font-medium">linktr.ee/johnelipse</span>
          </span>
          <Button
            variant="outline"
            size="sm"
            className="h-7 gap-1 ml-2 text-xs"
          >
            <Copy className="h-3.5 w-3.5" />
            Copy your Linktree URL
          </Button>
        </AlertDescription>
      </Alert>

      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16 rounded-full border">
          <AvatarImage src="/placeholder.svg" alt="@johnelipse" />
          <AvatarFallback>JE</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">@johnelipse</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Add bio</p>
          <div className="flex items-center gap-2">
            {handles.map((handle) => {
              return (
                <Button
                  key={handle.id}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  {getIcon(handle.name)}
                </Button>
              );
            })}
            <SocialIconsDialog handles={handles} />
          </div>
        </div>
      </div>
      <AddLink />

      <div className="flex items-center justify-between">
        <Button variant="outline" className="gap-2">
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
            <rect width="6" height="6" x="4" y="4" rx="1" />
            <rect width="6" height="6" x="14" y="4" rx="1" />
            <rect width="6" height="6" x="4" y="14" rx="1" />
            <rect width="6" height="6" x="14" y="14" rx="1" />
          </svg>
          Add collection
        </Button>
        <Button variant="outline" className="gap-2">
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
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 14v1" />
            <path d="M9 19v2" />
            <path d="M9 3v2" />
            <path d="M9 9v1" />
            <path d="M15 14v1" />
            <path d="M15 19v2" />
            <path d="M15 3v2" />
            <path d="M15 9v1" />
          </svg>
          View archive
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {urls.map((url) => {
          return (
            <Card key={url.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2 w-full">
                    {editingTitleId === url.id ? (
                      <div className="flex items-center w-full gap-2">
                        <Input
                          value={tempTitle}
                          onChange={(e) => setTempTitle(e.target.value)}
                          className="h-8"
                          autoFocus
                        />
                        <div className="flex">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleSaveTitle(url.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={handleCancelTitleEdit}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-medium truncate">{url.title}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleEditTitle(url)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex items-center text-sm text-muted-foreground w-full">
                    {editingLinkId === url.id ? (
                      <div className="flex items-center w-full gap-2">
                        <Input
                          value={tempLink}
                          onChange={(e) => setTempLink(e.target.value)}
                          className="h-8"
                          autoFocus
                        />
                        <div className="flex">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleSaveLink(url.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={handleCancelLinkEdit}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span>{url.link}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-2"
                          onClick={() => handleEditLink(url)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      1 click
                    </span>
                  </div>
                  <Switch
                    id={`public-toggle-${url.id}`}
                    checked={url.isPublic || false}
                    disabled={isUpdating}
                    onCheckedChange={() =>
                      handleTogglePublic(url.id, url.isPublic || false)
                    }
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
