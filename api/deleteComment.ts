import client from "./client";

export async function deleteComment(id: string) {
  await client.patch<null>(`/comments/delete/${id}`);

  return null;
}
