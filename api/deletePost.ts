import client from "./client";

export async function deletePost(id: string) {
  await client.delete<null>(`/post/${id}`);

  return null;
}
