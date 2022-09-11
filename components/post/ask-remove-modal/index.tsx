import AskModal from "components/styled/askModal";
import * as React from "react";

interface IAskRemoveModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const AskRemoveModal: React.FunctionComponent<IAskRemoveModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <AskModal
      visible={visible}
      title="포스트 삭제"
      description="포스트를 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskRemoveModal;
