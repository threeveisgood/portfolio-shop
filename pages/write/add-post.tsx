import React, { ReactElement } from 'react'
import Responsive from 'components/styled/responsive'
import Editor from 'components/write/editor'
import WriteActionButtons from 'components/write/write-action-buttons'
import { getSession } from 'next-auth/client'

interface Props {
  username: string
}

export default function addPost({ username }: Props): ReactElement {  
    return (
        <Responsive>
          <Editor username={username} />
          <WriteActionButtons />
        </Responsive>
    )
}

export async function getServerSideProps(context: any) {
  const session = await getSession({req: context.req})
  const username = session?.user?.name

  if (!session) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
      props: { session, username }
  }
}
