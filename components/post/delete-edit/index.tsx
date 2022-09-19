import React, { useState } from "react";
import AskRemoveModal from "components/post/ask-remove-modal";
import { useRouter } from "next/router";
import useDeletePost from "hooks/useDeletePost";
import useWriteStateActions from "hooks/state/useWriteStateActions";
import { DeleteEditCt, ButtonCt, Button } from "./delete-edit.styled";

interface IDeleteEditProps {
  postID: string;
  title: string;
  price: string;
  category: string;
  shipping: string;
  store: string;
  productURL: string;
  imageLinks: string[];
  body: string;
  _id: string;
}

const DeleteEdit: React.FunctionComponent<IDeleteEditProps> = ({
  postID,
  title,
  price,
  category,
  shipping,
  store,
  productURL,
  imageLinks,
  body,
  _id,
}: IDeleteEditProps) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const { mutate: deleteMutate } = useDeletePost(postID);
  const { setOriginalPost } = useWriteStateActions();

  const onEdit = () => {
    setOriginalPost({
      title,
      body,
      price,
      productURL,
      imageLinks,
      store,
      shipping,
      category,
      originalPostId: _id,
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
