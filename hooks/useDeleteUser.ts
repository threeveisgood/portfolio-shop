import { deleteUser } from "api-codes/deleteUser";
import { useMutation } from "react-query";

export default function useDeleteUser() {
  const mutation = useMutation(deleteUser);
  return mutation;
}
