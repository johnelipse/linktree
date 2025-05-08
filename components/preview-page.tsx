import Image from "next/image";
import { Snowflake } from "lucide-react";
import Link from "next/link";
import { UserProps } from "@/types/type";
import { getIcon } from "@/lib/get-icon";

export default function PreviewPage({ user }: { user: UserProps | null }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#e9edf0]">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2 text-gray-700">
          <Snowflake className="h-5 w-5" />
          <span className="text-sm">This is your Linktree.</span>
        </div>
        <Link href="/dashboard" className="text-sm font-medium">
          Edit
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-16">
        {/* Profile Section */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src={`${user?.image}` || "/placeholder.svg?height=96&width=96"}
              alt="Profile"
              width={96}
              height={96}
              className="object-cover bg-[#0d2440]"
            />
          </div>
        </div>

        {/* Username */}
        <h1 className="text-[#0047ff] text-xl font-semibold mb-4">
          @{user?.username}
        </h1>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          {user?.handles.map((handle) => {
            return (
              <Link href="#" className="text-[#0047ff]">
                {getIcon(handle.name)}
              </Link>
            );
          })}
        </div>

        {/* Links */}
        <div className="w-full max-w-md space-y-4">
          {user?.linkUrls.map((url) => {
            return (
              <Link
                href={url.url}
                className="relative bg-white rounded-full p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#0047ff] font-medium text-center">
                  {url.title}
                </span>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-transparent py-6 text-center text-white">
        <p className="text-sm">Join {user?.username} on Linktree today</p>
      </footer>
    </div>
  );
}
