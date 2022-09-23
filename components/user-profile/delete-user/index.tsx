import AskModal from "components/common/ask-modal";
import useModalState from "hooks/state/useModalState";
import useModalStateActions from "hooks/state/useModalStateActions";
import useDeleteUser from "hooks/useDeleteUser";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import React from "react";
import { DeleteUserCt, DeleteUserTitle } from "./delete-user.styled";
interface IDeleteUserProps {}

const DeleteUser: React.FunctionComponent<IDeleteUserProps> = (props) => {
  const router = useRouter();
  const { visible } = useModalState();
  const { visibleToggle } = useModalStateActions();
  const { mutate } = useDeleteUser();

  const onDeleteModal = () => {
    visibleToggle({
      visible: visible,
    });
  };

  const onModalConfirm = () => {
    signOut();

    mutate(undefined, {
      onSuccess: () => {
        router.push("/");
      },
    });

    visibleToggle({
      visible: visible,
    });
  };

  return (
    <DeleteUserCt>
      <DeleteUserTitle onClick={onDeleteModal}>탈퇴하기</DeleteUserTitle>
      <AskModal
        title="탈퇴하기"
        description="정말 탈퇴하시겠습니까?"
        confirmText="탈퇴"
        onConfirm={onModalConfirm}
      />
    </DeleteUserCt>
  );
};

export default DeleteUser;
