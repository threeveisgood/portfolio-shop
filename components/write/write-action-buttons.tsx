import * as React from 'react'
import styled from 'styled-components'
import { StyledButton } from 'components/styled/button'
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router'
import axios from 'axios'
import write from 'modules/write';
import { useAddPost } from 'hooks/useAddPost';

interface IWriteActionButtonsProps {
}

const WriteActionButtons: React.FunctionComponent<IWriteActionButtonsProps> = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const mutation = useMutation((post: any) => {
    return axios.post('/api/add-post', post)
  })

  const { title, body, price, productURL, imageLinks } = useSelector(({ write }: any) => ({
    title: write.title,
    body: write.body,
    price: write.price,
    productURL: write.productURL,
    imageLinks: write.imageLinks
  }))

  const onPublish = (e: any) => {
    mutation.mutate({ title, body, price, productURL })
  }

  const onCancel = () => {
    return router.back()
  }

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