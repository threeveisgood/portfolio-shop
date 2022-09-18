import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { initialize, changeReplyToggle } from "slices/comment";

export default function useCommentStateActions() {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators({ initialize, changeReplyToggle }, dispatch),
    [dispatch]
  );
}
