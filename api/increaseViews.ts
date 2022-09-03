import { Post } from "types/post";
import client from "./client";

export async function increaseViews(params: { id: string }): Promise<Post> {
  const { id } = params;
  const response = await client.patch(`/views/${id}`);

  return response.data;
}
