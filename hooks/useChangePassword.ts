<<<<<<< HEAD
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { changePassword } from "api/changePassword";

export default function useChangePassword() {
  const mutation = useMutation(changePassword, {
    onSuccess: (data) => {
      console.log(data);
      toast("비밀번호가 변경되었습니다.");
=======
import { useMutation, useQueryClient } from "react-query";
import { commentRecommend } from "api/commentRecommend";

export default function useCommentRecommend(postID: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation(commentRecommend, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", postID]);
>>>>>>> 7bcc2b05bbb443d2a1e6e358326b07897b5440b2
    },
  });

  return mutation;
}
