import { Post } from "types/post";
import client from "./client";

export async function rewritePost(params: any): Promise<Post> {
  const { data } = await client.patch("/rewrite-post", params);
  return data;
}
