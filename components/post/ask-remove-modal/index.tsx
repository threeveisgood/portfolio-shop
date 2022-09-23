import AskModal from "components/common/ask-modal";
import * as React from "react";

interface IAskRemoveModalProps {
  onConfirm: () => void;
}

const AskRemoveModal: React.FunctionComponent<IAskRemoveModalProps> = ({
  onConfirm,
}) => {
  return (
    <AskModal
      title="포스트 삭제"
      description="포스트를 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
    />
  );
};

export default AskRemoveModal;
