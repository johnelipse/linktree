import { getHandles } from "@/actions/handle";
import { getUrls } from "@/actions/url";
import { LinksContent } from "@/components/backend/links-content";
import { LinksHeader } from "@/components/backend/links-header";
import { MobilePreview } from "@/components/backend/mobile-preview";

export default async function LinksPage() {
  const handles = await getHandles();
  const urls = await getUrls();

  return (
    <>
      <LinksHeader />
      <div className="flex min-h-screen">
        <div className="flex-1 p-6">
          <LinksContent handles={handles} urls={urls} />
        </div>
        <MobilePreview urls={urls} handles={handles} />
      </div>
    </>
  );
}
