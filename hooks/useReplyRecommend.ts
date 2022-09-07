import { useMutation, useQueryClient } from "react-query";
import { replyRecommend } from "api/replyRecommend";

export default function useReplyRecommend(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(replyRecommend, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", postID]);
    },
  });

  return mutation;
}
