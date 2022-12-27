import client from "./client";

export async function deleteUser() {
  await client.delete<null>(`/auth/user`);

  return null;
}
