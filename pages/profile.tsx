import { getSession } from 'next-auth/client'
import React, { ReactElement } from 'react'

import UserProfile from 'components/profile/user-profile'

interface Props {
    
}

export default function Profile({}: Props): ReactElement {
    return <UserProfile />
}

export async function getServerSideProps(context: any) {
    const session = await getSession({req: context.req})

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}
