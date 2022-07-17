import * as React from "react";
import { useSession } from "next-auth/client";
import styled from "styled-components";
import { buttonStyle } from "components/styled/button";

interface IDeleteEditProps {
  onEdit: any;
}

const DeleteEdit: React.FunctionComponent<IDeleteEditProps> = ({
  onEdit,
}: IDeleteEditProps) => {
  return (
    <>
      <DeleteEditCt>
        <Button onClick={onEdit}>수정</Button>
        <Button>삭제</Button>
      </DeleteEditCt>
    </>
  );
};

export default DeleteEdit;

const DeleteEditCt = styled.div`
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
