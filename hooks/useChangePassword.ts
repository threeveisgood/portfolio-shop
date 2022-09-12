import { useMutation, useQueryClient } from "react-query";
import { commentRecommend } from "api/commentRecommend";

export default function useCommentRecommend(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(commentRecommend, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", postID]);
    },
  });

  return mutation;
}
