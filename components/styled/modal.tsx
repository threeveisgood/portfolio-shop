import { StyledButton } from "components/styled/button";
import * as React from "react";
import styled from "styled-components";

interface IModalProps {
  visible: boolean;
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
  onConfirm: any;
  onCancel: any;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  visible,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button blue onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </AskModalBlock>
    </FullScreen>
  );
};

export default Modal;

const FullScreen = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 35;
`;

const AskModalBlock = styled.div`
  width: 320px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem black;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const Button = styled(StyledButton)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;
