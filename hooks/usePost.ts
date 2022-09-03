import { useQuery } from "react-query";
import { getPost } from "api/getPost";

export default function usePost(postID: string) {
  return useQuery(["getPost", postID], () => getPost(postID), {
    enabled: postID.length > 0,
    staleTime: Infinity,
  });
}
