import client from "./client";

export async function fetchPosts(page: number) {
  const { data } = await client.get("/posts", { params: { page: page } });

  return data;
}
