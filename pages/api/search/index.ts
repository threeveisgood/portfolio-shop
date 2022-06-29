import { connectToDatabase, getPosts } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { value } = req.query;

  if (req.method !== "GET") return;

  const { page } = req.query;
  const postsPerPage = 20;
  const currentPage = Number(page);
  const index_last = currentPage * postsPerPage;
  const index_first = index_last - postsPerPage;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  let count: any;
  let result: any;

  try {
    count = await db
      .collection("posts")
      .find({ $text: { $search: value } })
      .count();

    result = await getPosts(client, "posts", postsPerPage, index_first, {
      $text: { $search: value },
    });

    res.status(200).json({ result, count });
  } catch {
    res.status(500).json({ message: "Getting post search failed." });
  }

  client.close();
}

export default handler;
