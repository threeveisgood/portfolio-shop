import useModalState from "hooks/state/useModalState";
import useModalStateActions from "hooks/state/useModalStateActions";
import React, { useEffect } from "react";
import { initialize } from "slices/modal";
import { FullScreen, AskModalBlock, Button } from "./ask-modal.styled";

interface IAskModalProps {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}

const AskModal: React.FunctionComponent<IAskModalProps> = ({
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
}) => {
  const { visible } = useModalState();
  const { visibleToggle } = useModalStateActions();

  const onCancel = () => {
    visibleToggle({
      visible: visible,
    });
  };

  useEffect(() => {
    return () => {
      initialize();
    };
  }, [initialize]);

  if (!visible) return null;
  return (
    <FullScreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button red onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </AskModalBlock>
    </FullScreen>
  );
};

export default AskModal;
