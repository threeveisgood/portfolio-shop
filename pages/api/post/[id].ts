import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  if (req.method === "GET") {
    const result: any = await db.collection("posts").findOne({ _id: id });

    const views: any = await db.collection("posts").updateOne(
      {
        _id: id,
      },
      {
        $inc: {
          viewsCount: 1,
        },
      }
    );

    const comments: any = await db
      .collection("comments")
      .find({ postID: id })
      .count();

    res.status(201).json({ message: "got a post!", result });
  }

  if (req.method === "DELETE") {
    const session: any = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const result: any = await db.collection("posts").deleteOne({
      _id: id,
    });

    res.status(200).json({ message: "deleted post!" });
  }

  client.close();
}

export default handler;
