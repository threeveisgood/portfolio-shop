import { increaseViews } from "api/increaseViews";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { ToastApiError } from "types/toast";

export default function useIncreaseViews() {
  const mutation = useMutation(increaseViews, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: ToastApiError) => {
      toast.error("조회 수 에러가 발생하였습니다.:" + error.message);
    },
  });
  return mutation;
}
