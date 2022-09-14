import { Post } from "types/post";
import client from "./client";

export async function writePost(params: any): Promise<Post> {
  const { data } = await client.post("/add-post", params);
  return data;
}
