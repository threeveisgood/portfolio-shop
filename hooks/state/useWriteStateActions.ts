import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  initialize,
  changeField,
  setImageLinks,
  setOriginalPost,
} from "modules/write";

export default function useWriteStateActions() {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        { initialize, changeField, setImageLinks, setOriginalPost },
        dispatch
      ),
    [dispatch]
  );
}
