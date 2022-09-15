import { rewritePost } from "api/rewritePost";
import { useMutation, useQueryClient } from "react-query";

// originalPostId는 글 수정시에 쓰이는 원래 글 id인 패러미터입니다.
export default function useRewritePost(originalPostId: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation(rewritePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPost", originalPostId]);
    },
  });

  return mutation;
}
