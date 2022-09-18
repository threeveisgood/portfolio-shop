import { useSelector } from "react-redux";
import { CommentState } from "types/comments";

export default function useCommentState() {
  return useSelector(({ replyToggle }: CommentState) => ({
    replyToggle: replyToggle,
  }));
}
