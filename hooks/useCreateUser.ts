import { createUser } from "api-codes/createUser";
import { useMutation } from "react-query";

export default function useCreateUser() {
  const mutation = useMutation(createUser);

  return mutation;
}
