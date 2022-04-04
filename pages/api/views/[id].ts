import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";


async function handler(req: NextApiRequest, res: NextApiResponse) {
  //if (req.method !== "PUT") return;

  const { id } = req.query;

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const db: any = client.db();
  
  const result: any = await db.collection("posts").updateOne(
    {
      _id: id,
    },
    {
      $inc: {
        viewsCount: 1,
      },
    }
  );

  res.status(201).json({ message: "Added views!" });
  client.close();
}

export default handler;
