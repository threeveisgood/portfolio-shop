import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req: req });

  const { id } = req.query;

  const username: any = session?.user?.name;
  const email: any = session?.user?.email;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  if (req.method === "POST") {
    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const { comment, postID, _id } = req.body;

    const result: any = await db.collection("comments").insertOne({
      comment: comment,
      postID: postID,
      username: username,
      email: email,
      _id: _id,
      date: new Date(),
      replies: [],
      upVote: 0,
      isDeleted: false,
      likeUsers: [],
    });

    const increaseCount = await db.collection("posts").updateOne(
      {
        _id: postID,
      },
      {
        $inc: {
          repliesCount: 1,
        },
      }
    );

    res.status(201).json({ message: "Added comment!" });
  }

  if (req.method === "GET") {
    let result;

    try {
      result = await db
        .collection("comments")
        .find({ postID: id })
        .sort({ _id: -1 })
        .toArray();

      res.status(200).json({ comments: result });
    } catch {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  if (req.method === "PATCH") {
    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const usersCollection: any = client.db().collection("users");
    const commentCollection: any = client.db().collection("comments");

    const user: any = await usersCollection.findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      client.close();
      return;
    }

    const result: any = await commentCollection.updateOne(
      { _id: id },
      { $set: { isDeleted: true } }
    );

    res.status(200).json({ message: "Comment Deleted!" });
  }

  client.close();
}

export default handler;
