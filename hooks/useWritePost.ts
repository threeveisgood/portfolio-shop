import { writePost } from "api/writePost";
import { useMutation } from "react-query";

export default function useWritePost() {
  const mutation = useMutation(writePost);

  return mutation;
}
