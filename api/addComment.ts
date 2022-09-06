import { Comment } from "types/comments";
import client from "./client";

export async function addComment(params: {
  comment: string;
  postID: string;
  _id: string;
}): Promise<Comment> {
  const { data } = await client.post(`comments/${params._id}`, params);

  return data;
}
