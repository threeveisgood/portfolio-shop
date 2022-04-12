import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== "GET") return;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  const result: any = await db.collection("posts").findOne({ _id: id });

  const comments: any = await db.collection("comments").find({ postID: id }).count();  

  res.status(201).json({ message: "got a post!", result });

  client.close();
}

export default handler;
