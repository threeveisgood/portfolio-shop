import { addReply } from "api-codes/addReply";
import { useMutation, useQueryClient } from "react-query";

export default function useAddReply(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(addReply, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", postID]);
    },
  });

  return mutation;
}
