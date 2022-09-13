import { useMutation, useQueryClient } from "react-query";
import { postRecommend } from "api/postRecommend";

export default function usePostRecommend(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(postRecommend, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPost", postID]);
    },
  });

  return mutation;
}
