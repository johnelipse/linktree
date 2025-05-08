import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function LinksHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b-[1px] border-solid border-gray-300">
      <h1 className="text-2xl font-semibold">Links</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="gap-2 rounded-full">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
            <span className="sr-only">Design</span>
          </span>
          <span>Design</span>
        </Button>
        <Button variant="outline" className="gap-2 rounded-full">
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
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          <span>Share</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </div>
  );
}
