import { connectToDatabase } from 'lib/db-utils'
import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id

  if (req.method !== 'GET') return

  const client: any = await connectToDatabase()

  const db: any = client.db()
  
  const result: any = await db.collection('posts').find({ _id: postId })

  res.status(201).json({ message: "got a post!" })
  client.close()
}

export default handler
