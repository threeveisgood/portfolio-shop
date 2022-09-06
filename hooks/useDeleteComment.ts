import { deleteComment } from "api/deleteComment";
import { useMutation, useQueryClient } from "react-query";

export default function useDeleteComment(postID: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteComment, {
    onSuccess: () => {
      return queryClient.invalidateQueries(["getComments", postID]);
    },
  });
  return mutation;
}
