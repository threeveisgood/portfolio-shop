import React, { ReactElement } from 'react'
import AddPost from 'components/admin/addPost'
interface Props {
    
}

export default function addPost({}: Props): ReactElement {
    return (
        <div>
            <AddPost />
        </div>
    )
}
