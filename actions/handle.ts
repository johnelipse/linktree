"use server";

import { db } from "@/prisma/db";
import { HandleProps, UpdateHandleProps } from "@/types/type";

export async function createHandle(data: HandleProps) {
  try {
    const newHandle = await db.handle.create({
      data: {
        name: data.name,
        userName: data.userName,
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
