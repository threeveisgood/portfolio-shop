import { connectToDatabase, getCount, getPosts } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return;
  }

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

  let count;
  let result;

  try {
    count = await getCount(client, "posts");

    result = await getPosts(client, "posts", postsPerPage, index_first);

    res.status(200).json({ count, result });
  } catch {
    res.status(500).json({ message: "Getting Post Lists failed." });
  }

  client.close();
}

export default handler;
