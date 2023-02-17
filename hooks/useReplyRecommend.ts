import { useMutation, useQueryClient } from "react-query";
import { commentRecommend } from "api-codes/commentRecommend";

export default function useReplyRecommend(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(commentRecommend, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", postID]);
    },
  });

  return mutation;
}
