import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== "DELETE") return;

  const session: any = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const client: any = await connectToDatabase();

  const db: any = client.db();

  const result: any = await db.collection("posts").deleteOne({
    _id: id,
  });

  res.status(200).json({ message: "deleted post!" });
  client.close();
}

export default handler;
