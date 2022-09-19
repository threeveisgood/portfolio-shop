import { useAppSelector } from "./useReduxFunctions";

export default function useCommentState() {
  return useAppSelector(({ comment }) => ({
    replyToggle: comment.replyToggle,
  }));
}
