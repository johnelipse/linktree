"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader, PauseIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateProfile } from "@/actions/users";
// import { updateUserProfileById } from "@/actions/user-profile";

type ProfileProps = {
  username: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ProfileProps>();
  const router = useRouter();

  async function onSubmit(data: ProfileProps) {
    setLoading(true);

    try {
      const res = await updateProfile({
        username: data.username,
      });
      if (res) {
        setLoading(false);
        router.push("/dashboard");
        reset();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16 xl:px-24">
        <div className="max-w-md mx-auto lg:mx-0">
          <div className="mb-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Linktree</h1>
              <span className="text-green-400 text-3xl">*</span>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-4">Welcome to Linktree!</h2>
          <p className="text-gray-600 mb-8">
            Choose your Linktree username. You can always change it later.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-8">
              <Input
                className="bg-gray-50 py-6 pl-[90px] text-base"
                placeholder="username"
                {...register("username", { required: true })}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                linktr.ee/
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center mb-8">
              By continuing, you agree to receive offers, news and updates from
              Linktree
            </p>

            {loading ? (
              <Button
                type="button"
                disabled
                className="w-full py-6 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded-md font-normal"
              >
                <Loader className="w-4 h-4 animate-spin" />
                continuing...
              </Button>
            ) : (
              <Button className="w-full py-6 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-normal">
                continue
              </Button>
            )}
          </form>
        </div>
      </div>

      {/* Right Section - Phone Mockup */}
      <div className="flex-1 bg-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Phone UI */}
            <div className="bg-purple-700 rounded-3xl p-6 mx-4 relative">
              {/* Profile Card */}
              <div className="bg-purple-600 rounded-3xl p-4 mb-4 relative">
                {/* Username Tag */}
                <div className="bg-white rounded-full py-2 px-4 inline-flex items-center absolute -top-2 right-4">
                  <span className="text-black mr-1">*</span>
                  <span className="text-black text-sm">/superwintendo</span>
                </div>

                {/* Profile Image */}
                <div className="flex items-center mt-8">
                  <div className="w-14 h-14 rounded-full bg-blue-400 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Placeholder for profile image */}
                    </div>
                  </div>
                  <div className="ml-4 text-white">
                    <div className="font-bold">Super Wintendo</div>
                    <div className="text-xs opacity-80">
                      Streaming every Tuesday
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <div className="bg-purple-500 rounded-full py-3 px-6 text-white text-center">
                  Watch now on Twitch
                </div>
                <div className="bg-purple-500 rounded-full py-3 px-6 text-white text-center">
                  Join my Discord
                </div>
                <div className="bg-gray-300 rounded-full py-3 px-6 text-center relative">
                  Playlists
                  <span className="absolute right-4 top-1/2 -translate-y-1/2">
                    ▼
                  </span>
                </div>
              </div>

              {/* Video Player */}
              <div className="mt-4 bg-gray-300 rounded-2xl overflow-hidden relative">
                <div className="aspect-video relative">
                  {/* Video placeholder */}
                  <div className="absolute left-4 bottom-4 bg-white rounded-full p-2">
                    <PauseIcon size={20} />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4">
                    <div className="h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-end mt-4 space-x-2">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">♪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
