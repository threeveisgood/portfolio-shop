import { Comments } from "types/comments";
import client from "./client";

export async function getComments(id: string): Promise<Comments> {
  const { data } = await client.get(`/comments/${id}`);

  return data;
}
