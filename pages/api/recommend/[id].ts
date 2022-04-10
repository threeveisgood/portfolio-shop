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

  const { isAlready } = req.body;

  if (isAlready) {
    const decreaseLikeCount: any = await db.collection("posts").updateOne(
      {
        _id: id,
      },
      {
        $inc: {
          likeCount: -1,
        },
        $pull: {
          likeUsers: email,
        },
      }
    );
  } else {
    const increaseLikeCount: any = await db.collection("posts").updateOne(
      {
        _id: id,
      },
      {
        $inc: {
          likeCount: 1,
        },
        $addToSet: {
          likeUsers: email,
        },
      }
    );
  }

  res.status(201).json({ message: "Added LikeCount!" });
  client.close();
}

export default handler;
