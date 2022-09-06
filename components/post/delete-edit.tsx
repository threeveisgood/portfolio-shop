import React, { useState } from "react";
import styled from "styled-components";
import AskRemoveModal from "components/post/AskRemoveModal";
import { buttonStyle } from "components/styled/button";
import { useRouter } from "next/router";
import useDeletePost from "hooks/useDeletePost";
import useWriteStateActions from "hooks/state/useWriteStateActions";

interface IDeleteEditProps {
  postID: string;
  title: string;
  price: string;
  category: string;
  shipping: string;
  store: string;
  date: Date;
  username: string;
  productURL: string;
  imageLinks: string[] | undefined;
  body: string;
  viewsCount: number;
  likeCount: number;
  likeUsers: string[];
  repliesCount: number;
  email: string;
  _id: string;
}

const DeleteEdit: React.FunctionComponent<IDeleteEditProps> = ({
  postID,
  title,
  price,
  category,
  shipping,
  store,
  date,
  username,
  productURL,
  imageLinks,
  body,
  viewsCount,
  likeCount,
  likeUsers,
  repliesCount,
  email,
  _id,
}: IDeleteEditProps) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const { mutate: deleteMutate } = useDeletePost(postID);
  const { setOriginalPost } = useWriteStateActions();

  const onEdit = () => {
    setOriginalPost({
      title,
      price,
      category,
      shipping,
      store,
      date,
      username,
      productURL,
      imageLinks,
      body,
      viewsCount,
      likeCount,
      likeUsers,
      repliesCount,
      email,
      _id,
    });
    router.push("/write/add-post");
  };

  const onRemove = () => {
    deleteMutate(undefined, {
      onSuccess: () => {
        router.push(`/`);
      },
    });
  };

  const onRemoveClick = () => {
    setModal(true);
  };

  const onModalCancel = () => {
    setModal(false);
  };

  const onModalConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <DeleteEditCt className="if-last">
      <ButtonCt>
        <Button onClick={onEdit}>수정</Button>
        <Button onClick={onRemoveClick}>삭제</Button>
      </ButtonCt>
      <AskRemoveModal
        visible={modal}
        onConfirm={onModalConfirm}
        onCancel={onModalCancel}
      />
    </DeleteEditCt>
  );
};

export default DeleteEdit;

const DeleteEditCt = styled.div`
  margin-top: -2.2rem;
`;
const ButtonCt = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  ${buttonStyle}
  background: transparent;
  color: ${(props) => props.theme.black};
  transition: 0.3s;
  font-size: 1.2rem;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.black};
  }
`;
