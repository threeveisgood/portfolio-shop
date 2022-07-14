import { connectToDatabase, getTrends } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return;
  }

  const postsPerPage = 12;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  let result;

  try {
    result = await getTrends(client, "posts", postsPerPage, {
      likeCount: -1,
    });

    res.status(200).json({ result });
  } catch {
    res.status(500).json({ message: "Getting Hottest Lists failed." });
  }

  client.close();
}

export default handler;
