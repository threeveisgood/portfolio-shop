import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { initialize, changeField } from "modules/comment";

export default function useCommentStateActions() {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators({ initialize, changeField }, dispatch),
    [dispatch]
  );
}
