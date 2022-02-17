import React, { ReactElement } from 'react'
import Responsive from 'components/styled/responsive'
import Editor from 'components/write/editor'
import WriteActionButtons from 'components/write/write-action-buttons'

interface Props {
    
}

export default function addPost({}: Props): ReactElement {
    return (
        <Responsive>
          <Editor />
          <WriteActionButtons />
        </Responsive>
    )
}
