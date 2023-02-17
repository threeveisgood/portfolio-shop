import { deleteReply } from "api-codes/deleteReply";
import { useMutation, useQueryClient } from "react-query";

export default function useDeleteReply(postID: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteReply, {
    onSuccess: () => {
      return queryClient.invalidateQueries(["getComments", postID]);
    },
  });
  return mutation;
}
