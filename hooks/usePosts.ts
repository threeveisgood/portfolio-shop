import { fetchPosts } from "api/fetchPosts";
import { useQuery } from "react-query";

export default function usePosts(page: number) {
  return useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true,
  });
}
