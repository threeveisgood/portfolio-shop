import { useAppSelector } from "./useReduxFunctions";

export default function useModalState() {
  return useAppSelector(({ modal }) => ({
    visible: modal.visible,
  }));
}
