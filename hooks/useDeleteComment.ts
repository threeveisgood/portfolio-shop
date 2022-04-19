import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDeleteComments = (id: string, postID: string) => {
  const queryClient = useQueryClient();
  
  return useMutation(() => axios.patch(`/api/comments/delete/${id}`), {
      onSuccess: () => {
        queryClient.invalidateQueries(["getComments", postID]);    
      }
  })
};

export { useDeleteComments };
