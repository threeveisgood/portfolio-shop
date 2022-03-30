import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts: any = async (page: any) => {
  const { data } = await axios.get("api/posts", { params: { page: page } });

  return data;
};

const usePosts: any = (page: any) => {
  return useQuery(["posts", page], () => fetchPosts(page), {    
    keepPreviousData: true
  });
};

export { usePosts, fetchPosts };
