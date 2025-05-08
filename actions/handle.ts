"use server";

import { authOptions } from "@/lib/auth";
import { db } from "@/prisma/db";
import { HandleProps, UpdateHandleProps } from "@/types/type";
import { getServerSession } from "next-auth";

export async function createHandle(data: HandleProps) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return {
        status: 404,
        error: "Session not available",
      };
    }
    const id = session.user.id;
    const newHandle = await db.handle.create({
      data: {
        name: data.name,
        userName: data.userName,
        userId: id,
      },
    });
    return {
      status: 201,
      data: newHandle,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getHandles() {
  try {
    const handles = await db.handle.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return handles;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateHandleBydId(data: UpdateHandleProps, id: string) {
  try {
    const updatedHandle = await db.handle.update({
      where: {
        id,
      },
      data,
    });
    return {
      status: 201,
      data: updatedHandle,
    };
  } catch (error) {
    console.log(error);
  }
}
