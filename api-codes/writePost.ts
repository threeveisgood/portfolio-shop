import { Post } from "types/post";
import { WritePublish } from "types/write";
import client from "./client";

export async function writePost(params: WritePublish): Promise<Post> {
  const { data } = await client.post("/add-post", params);
  return data;
}
