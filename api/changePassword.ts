import { ChangePassword } from "types/auth";
import client from "./client";

export async function changePassword(params: ChangePassword): Promise<null> {
  const response = await client.patch(`/auth/user`, params);

  return response.data;
}
