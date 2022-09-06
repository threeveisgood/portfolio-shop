import { addReply } from "api/addReply";
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
