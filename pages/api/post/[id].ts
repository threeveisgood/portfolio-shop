import { connectToDatabase } from 'lib/db-utils'
import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  if (req.method !== 'GET') return

  const client: any = await connectToDatabase()

  const db: any = client.db()
  
  const result: any = await db.collection('posts').findOne({ _id: id })

  res.status(201).json({ message: "got a post!", result })

  client.close()
}

export default handler
