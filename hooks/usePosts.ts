import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async (page: any) => {
  const { data } = await axios.get("api/posts", { params: { page: page } });

  return data;
};

const usePosts = (page: any) => {
  return useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true
  });
};

export { usePosts, fetchPosts };
