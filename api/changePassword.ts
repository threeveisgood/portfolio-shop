<<<<<<< HEAD
import { ChangePassword } from "types/auth";
import client from "./client";

export async function changePassword(params: ChangePassword): Promise<null> {
  const response = await client.patch(`/user/change-password`, params);
=======
import client from "./client";

export async function changePassword(): Promise<null> {
  const response = await client.patch(`/user/change-password`);
>>>>>>> 7bcc2b05bbb443d2a1e6e358326b07897b5440b2

  return response.data;
}
