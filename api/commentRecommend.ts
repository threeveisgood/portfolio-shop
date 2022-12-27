import client from "./client";
import { Comment } from "types/comments";
import { CommentRecommend } from "types/recommend";

export async function commentRecommend(
  params: CommentRecommend
): Promise<Comment> {
  const { data } = await client.patch(`/recommend/${params.id}`, params);

  return data;
}
