import { writePost } from "api/writePost";
import { useMutation, useQueryClient } from "react-query";

// originalPostId는 글 수정시에 쓰이는 원래 글 id인 패러미터입니다.
export default function useWritePost() {
  const mutation = useMutation(writePost);

  return mutation;
}
