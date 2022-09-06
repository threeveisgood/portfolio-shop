import client from "./client";
import { User } from "types/auth";

export async function createUser(params: User): Promise<User> {
  const { data } = await client.post("/auth/signup", params);

  return data;
}
