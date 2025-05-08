"use server";

import { db } from "@/prisma/db";

export async function getAllCategories() {
  try {
    const categories = await db.category.findMany({
      include: {
        products: true,
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
