import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

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
    const { comment, postID, repliedName, replyID } = req.body;

    const result: any = await db.collection("comments").updateOne(
      {
        _id: id,
      },
      {
        $push: {
          replies: {
            _id: replyID,
            comment: comment,
            postID: postID,
            username: username,
            email: email,
            date: new Date(),
            repliedName: repliedName,
            isDeleted: false,
            upVote: 0,
            likeUsers: [],
          },
        },
      }
    );

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

  if (req.method === "PATCH") {
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
  }

  client.close();
}

export default handler;
