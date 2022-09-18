import client from "./client";

export async function fetchCategory(
  value: string | string[] | undefined,
  page: number
) {
  const { data } = await client.get("/category", {
    params: { value: value, page: page },
  });

  return data;
}
