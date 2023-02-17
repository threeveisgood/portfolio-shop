import { User } from "types/auth";
import client from "./client";

export async function createUser(params: User): Promise<User> {
  const { data } = await client.post("/auth/user", params);

  return data;
}
