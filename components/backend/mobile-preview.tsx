import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handle, LinkUrl } from "@/lib/generated/prisma";
import { getIcon } from "@/lib/get-icon";
import { Instagram, TwitterIcon as TikTok, MoreHorizontal } from "lucide-react";

export function MobilePreview({
  urls,
  handles,
}: {
  urls: LinkUrl[];
  handles: Handle[];
}) {
  const urlsToDisplay = urls.filter((url) => url.isPublic === true);
  const handlesToDisplay = handles.filter((handle) => handle.isPublic === true);
  return (
    <div className="hidden lg:flex w-[350px] border-l p-6 items-center justify-center">
      <div className="w-[280px] h-[500px] rounded-3xl border shadow-sm overflow-hidden bg-white">
        <div className="flex flex-col items-center p-6 pt-10 space-y-4">
          <Avatar className="h-20 w-20 rounded-full border">
            <AvatarImage src="/placeholder.svg" alt="@johnelipse" />
            <AvatarFallback>JE</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium">@johnelipse</h3>
          <div className="flex items-center gap-2">
            {handlesToDisplay.map((handle) => {
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
          </div>
          <div className="grid gap-4 grid-cols-1">
            {urlsToDisplay.map((url) => {
              return (
                <Card className="w-full">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-sm">{url.title}</span>
                    {/* <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-auto pt-10">
            <p className="text-xs text-center text-muted-foreground">
              Linktree®
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
