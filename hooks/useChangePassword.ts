import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { changePassword } from "api-codes/changePassword";

export default function useChangePassword() {
  const mutation = useMutation(changePassword, {
    onSuccess: (data) => {
      toast("비밀번호가 변경되었습니다.");
    },
  });

  return mutation;
}
