import { Post } from "types/post";
import { writeEdit } from "types/write";
import client from "./client";

export async function rewritePost(params: writeEdit): Promise<Post> {
  const { data } = await client.patch("/add-post", params);
  return data;
}
