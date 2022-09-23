import client from "./client";

export async function deleteUser() {
  await client.delete<null>(`/auth/delete-user`);

  return null;
}
