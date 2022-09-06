import { addComment } from "api/addComment";
import { useMutation, useQueryClient } from "react-query";

export default function useAddComment(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      return queryClient.invalidateQueries(["getComments", postID]);
    },
  });

  return mutation;
}
