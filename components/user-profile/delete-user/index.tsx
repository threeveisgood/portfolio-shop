import AskModal from "components/common/ask-modal";
import React, { useState } from "react";
import { DeleteUserCt, DeleteUserTitle } from "./delete-user.styled";
interface IDeleteUserProps {}

const DeleteUser: React.FunctionComponent<IDeleteUserProps> = (props) => {
  const [modal, setModal] = useState(false);

  const onDelete = () => {
    setModal(true);
  };

  const onModalCancel = () => {
    setModal(false);
  };

  const onModalConfirm = () => {
    setModal(false);
  };

  return (
    <DeleteUserCt>
      <DeleteUserTitle onClick={onDelete}>탈퇴하기</DeleteUserTitle>
      <AskModal
        visible={modal}
        title="탈퇴하기"
        description="정말 탈퇴하시겠습니까?"
        confirmText="탈퇴"
        onConfirm={onModalConfirm}
        onCancel={onModalCancel}
      />
    </DeleteUserCt>
  );
};

export default DeleteUser;
