import { connectToDatabase } from "lib/db-utils";
import { getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const { id } = req.query;

  const email: any = session?.user?.email;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();

  const { isAlready, isPlus, postID } = req.body;

  if (isAlready && !isPlus) {
    const alreadyDecreaseupVote: any = await db
      .collection("comments")
      .updateOne(
        {
          replies:{$elemMatch:{_id:id}}
        },
        {
          $inc: {
            "replies.$.upVote": 1,
          },
          $pull: {            
            "replies.$.likeUsers": email
          },
        }
      );
  } else if (isAlready && isPlus) {
    const alreadyIncreaseupVote: any = await db
      .collection("comments")
      .updateOne(
        {
          replies:{$elemMatch:{_id:id}}
        },
        {
          $inc: {
            "replies.$.upVote": -1,
          },
          $pull: {
            "replies.$.likeUsers": email,
          },
        }
      );
  } else if (!isAlready && !isPlus) {
    const decreaseupVote: any = await db.collection("comments").updateOne(
      {
        replies:{$elemMatch:{_id:id}}
      },
      {
        $inc: {
          "replies.$.upVote": -1,
        },
        $addToSet: {
          "replies.$.likeUsers": email,
        },
      }
    );
  } else if (!isAlready && isPlus) {
    const increaseupVote: any = await db.collection("comments").updateOne(
      {
        replies:{$elemMatch:{_id:id}}
      },
      {
        $inc: {
          "replies.$.upVote": 1,
        },
        $addToSet: {
          "replies.$.likeUsers": email,
        },
      }
    );
  }

  res.status(201).json({ message: "Added upVote!" });
  client.close();
}

export default handler;
