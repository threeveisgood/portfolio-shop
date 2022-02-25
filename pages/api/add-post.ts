import { connectToDatabase } from 'lib/db-utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return

  const session: any = await getSession({req: req})

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' })
    return 
  }

  const { title, body, price, productURL, imageLinks, _id } = req.body

  const username: any = session?.user?.name

  if(
    !title ||
    !body    
  ) {
    res.status(422).json({ message: "an error occured!" });

    return
  }

  const client: any = await connectToDatabase()

  const db: any = client.db()
  
  const result: any = await db.collection('posts').insertOne({
    title: title,
    body: body,
    price: price,
    productURL: productURL,
    imageLinks: imageLinks,
    username: username,
    _id: _id
  })

  res.status(201).json({ message: "Added post!", data: username })
  client.close()
}

export default handler
