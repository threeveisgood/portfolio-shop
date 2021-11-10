import React, { ReactElement } from 'react'
import { dehydrate, QueryClient } from 'react-query'


interface Props {
    
}

export default function posts({}: Props): ReactElement {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps() {
    const queryClient = new QueryClient()

    //await queryClient.prefetchQuery('posts', getPosts)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}