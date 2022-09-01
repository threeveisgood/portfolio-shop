import client from "./client";

export async function getComments(id: string) {
  const { data } = await client.get(`/comments/${id}`);

  return data;
}
