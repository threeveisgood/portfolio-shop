import { deletePost } from "api/deletePost";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { ToastApiError } from "types/toast";

export default function useDeletePost(id: string) {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deletePost(id), {
    onSuccess: () => {
      return queryClient.invalidateQueries(["posts"]);
    },
    onError: (error: ToastApiError) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
  return mutation;
}
