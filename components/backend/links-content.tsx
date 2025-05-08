"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Info,
  Copy,
  Edit,
  MoreHorizontal,
  Check,
  X,
  Upload,
} from "lucide-react";
import { SocialIconsDialog } from "../dialogs/social-icons-dialog";
import { Handle, LinkUrl } from "@/lib/generated/prisma";
import { getIcon } from "@/lib/get-icon";
import { AddLink } from "../dialogs/add-link-dailog";
import { Switch } from "../ui/switch";
import { UpdateLinkProps, UserProps } from "@/types/type";
import { updateUrlBydId } from "@/actions/url";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea"; // Assuming you have this component
import { updateProfile } from "@/actions/users";
import Link from "next/link";
import { toast } from "sonner";

export function LinksContent({
  handles,
  urls,
  user,
}: {
  handles: Handle[];
  urls: LinkUrl[];
  user: UserProps | null;
}) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // URL editing states
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [editingLinkId, setEditingLinkId] = useState<string | null>(null);
  const [tempTitle, setTempTitle] = useState("");
  const [tempLink, setTempLink] = useState("");

  // User profile editing states
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [tempUsername, setTempUsername] = useState(user?.username || "");
  const [tempBio, setTempBio] = useState(user?.summary || "");
  const [tempImage, setTempImage] = useState(user?.image || "");
  const [copied, setCopied] = useState(false);

  // Profile updating state
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // URL editing handlers
  const handleEditTitle = (url: LinkUrl) => {
    setEditingTitleId(url.id);
    setTempTitle(url.title);
  };

  const handleEditLink = (url: LinkUrl) => {
    setEditingLinkId(url.id);
    setTempLink(url.link);
  };

  const handleSaveTitle = (id: string) => {
    handleUpdate(id, { title: tempTitle });
    setEditingTitleId(null);
  };

  const handleSaveLink = (id: string) => {
    handleUpdate(id, { link: tempLink });
    setEditingLinkId(null);
  };

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

  // User profile editing handlers
  const handleEditUsername = () => {
    setIsEditingUsername(true);
    setTempUsername(user?.username || "");
  };

  const handleEditBio = () => {
    setIsEditingBio(true);
    setTempBio(user?.summary || "");
  };

  const handleEditImage = () => {
    setIsEditingImage(true);
    // In a real implementation, you might want to show a file picker here
    // For simplicity, we'll just use a text input for the image URL
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This is a simplified version. In reality, you would handle file upload
    // and then set the image URL after upload completes
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setTempImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    if (!user?.id) return;

    try {
      setIsUpdatingProfile(true);

      const dataToUpdate: {
        username?: string;
        summary?: string;
        image?: string;
      } = {};

      if (isEditingUsername) dataToUpdate.username = tempUsername;
      if (isEditingBio) dataToUpdate.summary = tempBio;
      if (isEditingImage) dataToUpdate.image = tempImage;

      await updateProfile(dataToUpdate);

      // Reset editing states
      setIsEditingUsername(false);
      setIsEditingBio(false);
      setIsEditingImage(false);

      // Refresh the page to show updated data
      router.refresh();
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleCancelProfileEdit = () => {
    setIsEditingUsername(false);
    setIsEditingBio(false);
    setIsEditingImage(false);
  };

  // Helper function to check if any profile field is being edited
  const isEditingProfile = isEditingUsername || isEditingBio || isEditingImage;

  const copyToClipboard = async () => {
    const link = `${baseUrl}/${user?.username} `;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success("Link copied", {
        description: "The link has been copied to your clipboard",
      });

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Copy failed", {
        description: "Failed to copy the link to clipboard",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Alert className="bg-blue-50 border-blue-100">
        <Info className="h-4 w-4 text-blue-500" />
        <AlertDescription className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            <span className="text-orange-500">🔥</span> Your Linktree is live:
            <Link href={`/${user?.username} `} className="font-medium">
              {baseUrl}/{user?.username || "johnelipse"}
            </Link>
          </span>
          <Button
            onClick={() => copyToClipboard()}
            variant="outline"
            disabled={copied}
            size="sm"
            className="h-7 gap-1 ml-2 text-xs"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied" : "Copy your Linktree URL"}
          </Button>
        </AlertDescription>
      </Alert>

      <div className="flex items-start gap-4">
        <div className="relative">
          <Avatar className="h-16 w-16 rounded-full border">
            <AvatarImage
              src={isEditingImage ? tempImage : (user?.image as string)}
              alt={user?.username as string}
            />
            <AvatarFallback>
              {user?.username?.[0]?.toUpperCase() || "JE"}
            </AvatarFallback>
          </Avatar>

          {!isEditingImage ? (
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-white"
              onClick={handleEditImage}
            >
              <Edit className="h-3 w-3" />
            </Button>
          ) : (
            <div className="mt-2">
              <Input
                type="file"
                accept="image/*"
                id="profile-image"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label htmlFor="profile-image" className="inline-block">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-1 cursor-pointer">
                  <Upload className="h-3.5 w-3.5" />
                  Upload Image
                </div>
              </label>
            </div>
          )}
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            {isEditingUsername ? (
              <div className="flex items-center w-full gap-2">
                <Input
                  value={tempUsername}
                  onChange={(e) => setTempUsername(e.target.value)}
                  className="h-8"
                  placeholder="Username"
                  autoFocus
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium">
                  @{user?.username || "johnelipse"}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={handleEditUsername}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <div>
            {isEditingBio ? (
              <div className="flex items-start w-full gap-2">
                <Textarea
                  value={tempBio}
                  onChange={(e) => setTempBio(e.target.value)}
                  className="min-h-[60px] text-sm"
                  placeholder="Add a bio..."
                  autoFocus
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  {user?.summary || "Add bio"}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={handleEditBio}
                >
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>

          {isEditingProfile && (
            <div className="flex items-center gap-2 mt-2">
              <Button
                size="sm"
                onClick={handleSaveProfile}
                disabled={isUpdatingProfile}
              >
                <Check className="h-4 w-4 mr-1" />
                Save Profile
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancelProfileEdit}
                disabled={isUpdatingProfile}
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
            </div>
          )}

          <div className="flex items-center gap-2">
            {user?.handles.map((handle) => {
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
            <SocialIconsDialog handles={user?.handles as Handle[]} />
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
        {user?.linkUrls.map((url) => {
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
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {url.isPublic ? "Public" : "Private"}
                    </span>
                    <Switch
                      id={`public-toggle-${url.id}`}
                      checked={url.isPublic || false}
                      disabled={isUpdating}
                      onCheckedChange={() =>
                        handleTogglePublic(url.id, url.isPublic || false)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
