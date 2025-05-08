"use server";

import { authOptions } from "@/lib/auth";
import { db } from "@/prisma/db";
import { LinkProps, UpdateLinkProps } from "@/types/type";
import { getServerSession } from "next-auth";

export async function createUrl(data: LinkProps) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        status: 404,
        error: "Session not available",
      };
    }
    const id = session.user.id;
    const newUrl = await db.linkUrl.create({
      data: {
        url: data.url,
        title: data.title,
        image: data.image,
        link: data.link,
        userId: id,
      },
    });
    return {
      status: 201,
      data: newUrl,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getUrls() {
  try {
    const urls = await db.linkUrl.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return urls;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateUrlBydId(data: UpdateLinkProps, id: string) {
  try {
    const updatedUrl = await db.linkUrl.update({
      where: {
        id,
      },
      data,
    });
    return {
      status: 201,
      data: updatedUrl,
    };
  } catch (error) {
    console.log(error);
  }
}
