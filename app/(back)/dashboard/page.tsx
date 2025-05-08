import { getHandles } from "@/actions/handle";
import { getUrls } from "@/actions/url";
import { getSingleUser } from "@/actions/users";
import { LinksContent } from "@/components/backend/links-content";
import { LinksHeader } from "@/components/backend/links-header";
import { MobilePreview } from "@/components/backend/mobile-preview";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function LinksPage() {
  const handles = await getHandles();
  const urls = await getUrls();
  const session = await getServerSession(authOptions);

  const user = await getSingleUser(session?.user.id as string);

  return (
    <>
      <LinksHeader />
      <div className="flex min-h-screen">
        <div className="flex-1 p-6">
          <LinksContent handles={handles} urls={urls} user={user} />
        </div>
        <MobilePreview user={user} />
      </div>
    </>
  );
}
