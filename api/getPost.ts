import { Post } from "types/post";
import client from "./client";

export async function getPost(id: string): Promise<Post> {
  const { data } = await client.get(`/post/${id}`);

  return data;
}
