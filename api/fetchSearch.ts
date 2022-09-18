import client from "./client";

export async function fetchSearch(
  value: string | string[] | undefined,
  page: number
) {
  const { data } = await client.get("/search", {
    params: { value: value, page: page },
  });

  return data;
}
