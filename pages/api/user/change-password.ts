import { hashPassword, verifyPassword } from 'lib/auth'
import { connectToDatabase } from 'lib/db-utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
      return 
  }

  const session: any = await getSession({req: req})

  if (!session) {
      res.status(401).json({ message: 'Not authenticated!' })
      return
  }

  const userEmail: any = session.user.email
  const oldPassword: any = req.body.oldPassword
  const newPassword: any = req.body.newPassword

  const client: any = await connectToDatabase()

  const usersCollection: any = client.db().collection('users')

  const user: any = await usersCollection.findOne({ email: userEmail })

  if (!user) {
      res.status(404).json({ message: 'User not found.' })
      client.close()
      return
  }

  const currentPassword: any = user.password

  const passwordsAreEqual: any = await verifyPassword(oldPassword, currentPassword)

  if (!passwordsAreEqual) {
      res.status(403).json({ message: 'Invalid password.' })
      client.close()
      return
  }

  const hashedPassword: any = await hashPassword(newPassword) 

  const result: any = await usersCollection.updateOne(
      { email: userEmail },
      { $set: { password: hashedPassword }}
  )

  client.close()
  res.status(200).json({ message: 'Password updated!' })
}
