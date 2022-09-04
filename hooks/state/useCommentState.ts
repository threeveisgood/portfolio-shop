import { useSelector } from "react-redux";
import { CommentState } from "types/comments";

export default function useCommentState() {
  return useSelector(({ comment }: CommentState) => ({
    replyToggle: comment.replyToggle,
  }));
}
