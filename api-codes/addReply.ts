import { AddReply, Reply } from "types/comments";
import client from "./client";

export async function addReply(params: AddReply): Promise<Reply> {
  const { data } = await client.post(`/reply/${params._id}`, params);

  return data;
}
