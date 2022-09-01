import client from "./client";

export async function increaseViews(params: { id: string }) {
  const { id } = params;
  const response = await client.patch<any>(`/views/${id}`);
  return response.data;
}
