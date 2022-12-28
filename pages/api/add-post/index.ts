import { connectToDatabase } from "lib/db-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const username: any = session?.user?.name;
  const email: any = session?.user?.email;

  const client: any = await connectToDatabase();

  const db: any = client.db();

  if (req.method === "POST") {
    const {
      title,
      body,
      price,
      productURL,
      imageLinks,
      store,
      shipping,
      category,
      _id,
    } = req.body;

    if (!title || !body) {
      res.status(422).json({ message: "an error occured!" });

      return;
    }

    const result: any = await db.collection("posts").insertOne({
      title: title,
      body: body,
      price: price,
      productURL: productURL,
      imageLinks: imageLinks,
      username: username,
      store: store,
      shipping: shipping,
      category: category,
      _id: _id,
      email: email,
      date: new Date(),
      likeCount: 0,
      likeUsers: [],
      viewsCount: 0,
      repliesCount: 0,
    });

    res.status(201).json({ message: "Added post!", data: username });
  }

  if (req.method === "PATCH") {
    const {
      title,
      body,
      price,
      productURL,
      imageLinks,
      store,
      shipping,
      category,
      originalPostId,
    } = req.body;

    if (!title || !body) {
      res.status(422).json({ message: "an error occured!" });

      return;
    }

    const result: any = await db.collection("posts").updateOne(
      {
        _id: originalPostId,
      },
      {
        $set: {
          title: title,
          body: body,
          price: price,
          productURL: productURL,
          imageLinks: imageLinks,
          store: store,
          shipping: shipping,
          category: category,
        },
      }
    );

    res.status(200).json({ message: "ReWrited post!" });
  }

  client.close();
}

export default handler;
