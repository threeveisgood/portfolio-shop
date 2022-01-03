import React, { ReactElement } from 'react'
import AddPost from 'components/admin/add-post'
interface Props {
    
}

export default function addPost({}: Props): ReactElement {
    return (
        <div>
            <AddPost />
        </div>
    )
}
