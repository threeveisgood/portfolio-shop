import { deleteUser } from "api/deleteUser";
import { useMutation } from "react-query";

export default function useDeleteUser() {
  const mutation = useMutation(deleteUser);
  return mutation;
}
