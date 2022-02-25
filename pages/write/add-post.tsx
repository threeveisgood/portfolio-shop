import React, { ReactElement } from 'react'
import Responsive from 'components/styled/responsive'
import Editor from 'components/write/editor'
import WriteActionButtons from 'components/write/write-action-buttons'
import { getSession } from 'next-auth/client'

export default function addPost(): ReactElement {  
    return (
        <Responsive>
          <Editor />
          <WriteActionButtons />
        </Responsive>
    )
}

export async function getServerSideProps(context: any) {
  const session = await getSession({req: context.req})

  if (!session) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
      props: { session }
  }
}
