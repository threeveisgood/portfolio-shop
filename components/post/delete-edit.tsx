import React, { useState } from "react";
import styled from "styled-components";
import AskRemoveModal from "components/post/AskRemoveModal";
import { buttonStyle } from "components/styled/button";

interface IDeleteEditProps {
  onEdit: () => void;
  onRemove: () => void;
}

const DeleteEdit: React.FunctionComponent<IDeleteEditProps> = ({
  onEdit,
  onRemove,
}: IDeleteEditProps) => {
  const [modal, setModal] = useState(false);

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
