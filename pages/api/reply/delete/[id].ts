import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    return;
  }

  const session: any = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const { id } = req.query;

  const email: any = session.user.email;

  const client: any = await connectToDatabase();

  const usersCollection: any = client.db().collection("users");
  const commentCollection: any = client.db().collection("comments");

  const user: any = await usersCollection.findOne({ email: email });

  if (!user) {
    res.status(404).json({ message: "User not found." });
    client.close();
    return;
  }

  const result: any = await commentCollection.updateOne(
    { replies: { $elemMatch: { _id: id } } },
    { $set: { "replies.$.isDeleted": true } }
  );

  res.status(200).json({ message: "Comment Deleted!" });
  client.close();
}
