import { getSingleUserByUsername } from "@/actions/users";
import PreviewPage from "@/components/preview-page";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  const user = await getSingleUserByUsername(username);
  return (
    <div>
      <PreviewPage user={user} />
    </div>
  );
}
