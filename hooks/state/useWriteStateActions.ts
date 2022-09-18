import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { initialize, setImageLinks, setOriginalPost } from "slices/write";

export default function useWriteStateActions() {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        { initialize, setImageLinks, setOriginalPost },
        dispatch
      ),
    [dispatch]
  );
}
