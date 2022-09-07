import client from "./client";
import { Comment } from "types/comments";
import { CommentRecommend } from "types/recommend";

export async function replyRecommend(
  params: CommentRecommend
): Promise<Comment> {
  const { data } = await client.patch(`/recommend/reply/${params.id}`, params);

  return data;
}
