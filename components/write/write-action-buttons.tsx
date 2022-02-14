import * as React from 'react'
import styled from 'styled-components'
import { StyledButton } from 'components/styled/button'

interface IWriteActionButtonsProps {
}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <Button onClick={onPublish}>
        글쓰기
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </WriteActionButtonsBlock>
  )
};

export default WriteActionButtons;

const WriteActionButtonsBlock = styled.div`
  margin: 1rem 0 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`

const Button = styled(StyledButton)`
  font-size: 1.5rem;  
  & + & {
    margin-left: 0.5rem;
  }
`