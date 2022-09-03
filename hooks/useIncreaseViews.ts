import { increaseViews } from "api/increaseViews";
import { useMutation } from "react-query";

export default function useIncreaseViews() {
  const mutation = useMutation(increaseViews);
  return mutation;
}
