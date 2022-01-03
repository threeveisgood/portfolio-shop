import { useMutation } from "react-query";
import axios from "axios";

const addPost = (post: any) => {
    return axios.post('/api/add-post', post)
}

export const useAddPost = () => {
    return useMutation(addPost)
}