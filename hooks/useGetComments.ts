import { getComments } from "api/getComments";
import { useQuery } from "react-query";

export default function useGetComments(id: string) {
  return useQuery(["getComments", id], () => getComments(id), {
    enabled: id.length > 0,
    staleTime: Infinity,
  });
}
