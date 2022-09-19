import { useMemo } from "react";
import { bindActionCreators } from "redux";
import {
  initialize,
  setTitle,
  setCategory,
  setPrice,
  setProductURL,
  setStore,
  setShipping,
  setImageLinks,
  setQuillBody,
  setOriginalPost,
} from "slices/write";
import { useAppDispatch } from "./useReduxFunctions";

export default function useWriteStateActions() {
  const dispatch = useAppDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          initialize,
          setTitle,
          setCategory,
          setPrice,
          setProductURL,
          setStore,
          setShipping,
          setImageLinks,
          setQuillBody,
          setOriginalPost,
        },
        dispatch
      ),
    [dispatch]
  );
}
