import NextAuth from "next-auth"
import Providers from 'next-auth/providers'

import { verifyPassword } from 'lib/auth'
import { connectToDatabase } from "lib/db-utils"

export default NextAuth({
    session: {
      jwt: true,
    },
    providers: [
      Providers.Credentials({
        async authorize(credentials: any) {
          const client: any = await connectToDatabase()
  
          const usersCollection: any = client.db().collection('users')
  
          const user: any = await usersCollection.findOne({
            email: credentials.email,
          });
  
          if (!user) {
            client.close()
            throw new Error('No user found!');
          }
  
          const isValid: any = await verifyPassword(
            credentials.password,
            user.password
          );
  
          if (!isValid) {
            client.close()
            throw new Error('Could not log you in!')
          }
  
          client.close();
          return { email: user.email, name: user.name }
          
        },
      }),
    ],
  })
  