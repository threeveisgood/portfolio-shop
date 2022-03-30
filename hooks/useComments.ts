import { useQuery } from "react-query";
import axios from "axios";

const fetchComments: any = async (id: string) => {
  const { data } = await axios.get(`/api/comments/${id}`);

  return data;
};

const useComments: any = async (postID: string) => {
  return useQuery(["getComment", postID], () => fetchComments(postID), {
    enabled: postID.length > 0,
    staleTime: Infinity,
  });
};

export { fetchComments, useComments };
