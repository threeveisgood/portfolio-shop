import { getComments } from "api-codes/getComments";
import { useQuery } from "react-query";

export default function useComments(id: string) {
  return useQuery(["getComments", id], () => getComments(id), {
    enabled: id.length > 0,
    staleTime: Infinity,
  });
}
