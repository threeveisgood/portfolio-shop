import type { NextApiRequest, NextApiResponse } from "next"
import { connectDatabase, insertDocument } from "lib/db-utils"
import { Post } from 'interfaces'
// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse //<Data>
) {

  let client

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Connecting to the database failed!" })
    return
  }

  if (req.method === "POST") {
    const {
      name,
      price,
      imageUrl,
      recommended,
      color,
      size,
      details,
      brand,
      link,
    } = req.body

    const newPost: Post = {
        name,
        price,
        imageUrl,
        recommended,
        color,
        size,
        details,
        brand,
        link,  
      }
    
      let result
    
      try {
        result = await insertDocument(client, 'posts', newPost)
      } catch (err) {
        res.status(500).json({ message: 'adding post failed!'})
      }
        
      res.status(201).json({ message: 'Added Post.', post: newPost })
  }

  client.close();
}
