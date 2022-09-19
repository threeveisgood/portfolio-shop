import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { initialize, changeReplyToggle } from "slices/comment";
import { useAppDispatch } from "./useReduxFunctions";

export default function useCommentStateActions() {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators({ initialize, changeReplyToggle }, dispatch),
    [dispatch]
  );
}
