import client from "./client";

export async function deletePost(id: string) {
  await client.delete<null>(`/delete-post/${id}`);

  return null;
}
