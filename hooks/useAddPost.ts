import { useMutation } from "react-query";
import axios from "axios";

const addPost = async (post: any) => {    
    const { data } = await axios.post('/api/add-post', post)

    return data
}

export const useAddPost = () => {
    return useMutation(addPost)
}