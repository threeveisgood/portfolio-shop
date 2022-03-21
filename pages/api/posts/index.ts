import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return;
  }

  //const { page } = req.query;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  const { category, postsPerPage, indexOfFirstPost } = req.body;

  let postCount;
  let result;

  try {
    if (category != undefined) {
      postCount = await db
        .collection("posts")
        .find({ category: category })
        .count();

      result = await db
        .collection("posts")
        .find({ category: category })
        .limit(postsPerPage)
        .skip(indexOfFirstPost)
        .sort({ _id: -1 })
        .toArray();
    } else {
      postCount = await db.collection("posts").count();

      result = await db
        .collection("posts")
        .find()
        .limit(postsPerPage)
        .skip(indexOfFirstPost)
        .sort({ _id: -1 })
        .toArray();
    }

    postCount;

    res.status(200).json({ postCount, result });
  } catch {
    res.status(500).json({ message: "Getting Post Lists failed." });
  }
}

export default handler;
