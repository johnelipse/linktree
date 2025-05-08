import Image from "next/image";
import { MoreHorizontal, Snowflake } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function PreviewPage() {
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
          {/* <div className="absolute -right-10 top-0">
            <button className="bg-gray-300 rounded-full p-2 opacity-80">
              <MoreHorizontal className="h-5 w-5 text-gray-600" />
            </button>
          </div> */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover bg-[#0d2440]"
            />
          </div>
        </div>

        {/* Username */}
        <h1 className="text-[#0047ff] text-xl font-semibold mb-4">
          @johnelipse
        </h1>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <Link href="#" className="text-[#0047ff]">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-[#0047ff]">
            <FaTiktok />
          </Link>
        </div>

        {/* Links */}
        <div className="w-full max-w-md space-y-4">
          <Link
            href="#"
            className="relative bg-white rounded-full p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-[#0047ff] font-medium text-center">
              Secure Swiss File Transfer & Decentralized Storage | WeSendit
            </span>
          </Link>

          <Link
            href="#"
            className="relative bg-white rounded-full p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-[#0047ff] font-medium text-center">
              Secure Swiss File Transfer & Decentralized Storage | WeSendit
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-transparent py-6 text-center text-white">
        <p className="text-sm">Join johnelipse on Linktree today</p>
      </footer>
    </div>
  );
}
