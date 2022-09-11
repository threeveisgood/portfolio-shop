import client from "./client";
import { PostRecommend } from "types/recommend";
import { Post } from "types/post";

export async function postRecommend(params: PostRecommend): Promise<Post> {
  const { data } = await client.patch(`/recommend/${params.id}`, params);

  return data;
}
