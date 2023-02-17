import { deletePost } from "api-codes/deletePost";
import { useMutation, useQueryClient } from "react-query";

export default function useDeletePost(id: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deletePost(id), {
    onSuccess: () => {
      return queryClient.invalidateQueries(["posts"]);
    },
  });
  return mutation;
}
