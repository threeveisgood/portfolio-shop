import { connectToDatabase } from 'lib/db-utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return

  const session: any = await getSession({req: req})

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' })
    return 
  }

  const { title, body, price, productURL, imageLinks } = req.body

  const client: any = await connectToDatabase()


  res.status(200).json({ name: 'John Doe' })
}
