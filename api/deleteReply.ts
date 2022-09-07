import client from "./client";

export async function deleteReply(id: string) {
  await client.patch<null>(`/reply/delete/${id}`);

  return null;
}
