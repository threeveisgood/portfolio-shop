import { hashPassword, verifyPassword } from "lib/auth";
import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client: any = await connectToDatabase();

  const db: any = client.db();

  if (req.method === "POST") {
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
      res.status(422).json({
        message:
          "Invalid input - password should also be at least 7 characters long.",
      });

      return;
    }

    const existingUser: any = await db
      .collection("users")
      .findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User exists already!" });
      client.close();
      return;
    }

    const existingname: any = await db
      .collection("users")
      .findOne({ name: name });

    if (existingname) {
      res.status(422).json({ message: "name exists already!" });
      client.close();
      return;
    }

    const hashedPassword: any = await hashPassword(password);

    const result: any = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
      name: name,
    });

    res.status(201).json({ message: "Created user!" });
  }

  if (req.method === "PATCH") {
    const session: any = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const userEmail: any = session.user.email;
    const oldPassword: any = req.body.oldPassword;
    const newPassword: any = req.body.newPassword;

    const usersCollection: any = client.db().collection("users");

    const user: any = await usersCollection.findOne({ email: userEmail });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      client.close();
      return;
    }

    const currentPassword: any = user.password;

    const passwordsAreEqual: any = await verifyPassword(
      oldPassword,
      currentPassword
    );

    if (!passwordsAreEqual) {
      res.status(403).json({ message: "Invalid password." });
      client.close();
      return;
    }

    const hashedPassword: any = await hashPassword(newPassword);

    const result: any = await usersCollection.updateOne(
      { email: userEmail },
      { $set: { password: hashedPassword } }
    );

    res.status(200).json({ message: "Password updated!" });
  }

  if (req.method === "DELETE") {
    const session: any = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const email = session?.user?.email;

    const result: any = await db.collection("users").deleteOne({
      email: email,
    });

    res.status(200).json({ message: "deleted user!" });
  }

  client.close();
}

export default handler;
