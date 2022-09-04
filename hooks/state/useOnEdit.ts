import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { setOriginalPost } from "modules/write";

export default function useOnEdit() {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators({ setOriginalPost }, dispatch),
    [dispatch]
  );
}
