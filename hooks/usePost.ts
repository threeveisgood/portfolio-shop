import { useQuery } from "react-query";
import axios from "axios";

const fetchPost: any = async (id: string) => {
  const { data } = await axios.get(`/api/post/${id}`);

  return data;
};

const usePost: any = (postID: string) => {
  return useQuery(["getPost", postID], 
  () => fetchPost(postID), 
  {
    enabled: postID.length > 0,
    staleTime: Infinity,
  });
};

export { fetchPost, usePost }
