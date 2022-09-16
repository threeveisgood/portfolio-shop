import * as React from "react";
import { FullScreen, AskModalBlock, Button } from "./ask-modal.styled";

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
