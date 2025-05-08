"use server";

import { url } from "inspector";

const urlMetadata = require("url-metadata");

export async function getMetaData(link: string) {
  try {
    const metadata = await urlMetadata(link);
    return metadata;
  } catch (err) {
    console.log(err);
  }
}
