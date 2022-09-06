import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { changeField, setImageLinks, setOriginalPost } from "modules/write";

export default function useWriteStateActions() {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        { changeField, setImageLinks, setOriginalPost },
        dispatch
      ),
    [dispatch]
  );
}
