import { hashPassword } from "lib/auth";
import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }
  const data: any = req.body;

  const { email, password, name } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7 ||
    !name ||
    name.trim().length < 2 ||
    name.trim().length > 13                              
  ) {
    res
      .status(422)
      .json({
        message:
          "Invalid input - password should also be at least 7 characters long.",
      });

      return
  }

  const client: any = await connectToDatabase();

  const db: any = client.db();

  const existingUser: any = await db.collection('users').findOne({email: email})

  if (existingUser) {
      res.status(422).json({ message: 'User exists already!' })
      client.close()
      return 
  }

  const existingname: any = await db.collection('users').findOne({name: name})

  if (existingname) {
    res.status(422).json({ message: 'name exists already!' })
    client.close()
    return 
  }

  const hashedPassword: any = await hashPassword(password);

  const result: any = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
    name: name
  });

  res.status(201).json({ message: "Created user!" });
  client.close()
}

export default handler;
