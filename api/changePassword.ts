import client from "./client";

export async function changePassword(): Promise<null> {
  const response = await client.patch(`/user/change-password`);

  return response.data;
}
