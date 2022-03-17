import {
  connectToDatabase,
} from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

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

  const { comment, repliedName, replyID } = req.body;

  const result: any = await db
    .collection("comments")
    .updateOne({
      _id: id
     },
     {
       $push: { replies: {   
           _id: replyID,        
           comment: comment,
           postID: id,
           username: username,
           email: email,
           date: new Date(),   
           repliedName: repliedName,
           isDeleted: false, 
           upVote: 0           
        }} 
     }
    );

  res.status(201).json({ message: "Added comment!" });

  client.close();
}

export default handler;
