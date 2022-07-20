import { StyledButton } from "components/styled/button";
import * as React from "react";
import styled from "styled-components";

interface IAskModalProps {
  visible: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AskModal: React.FunctionComponent<IAskModalProps> = ({
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

export default AskModal;

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const AskModalBlock = styled.div`
  width: 42rem;
  background: #fff;
  padding: 2rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem rebeccapurple(0, 0, 0, 0.125);
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

  @media (max-width: 768px) {
    width: 20rem;
    font-size: 1.2rem;

    button {
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

const Button = styled(StyledButton)`
  font-size: 1.3rem;
  & + & {
    margin-left: 0.75rem;
  }
`;
