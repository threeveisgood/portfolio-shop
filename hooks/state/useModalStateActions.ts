import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { initialize, visibleToggle } from "slices/modal";
import { useAppDispatch } from "./useReduxFunctions";

export default function useModalStateActions() {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators({ initialize, visibleToggle }, dispatch),
    [dispatch]
  );
}
