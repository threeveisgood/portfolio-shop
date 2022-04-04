import { useMutation } from "react-query";
import axios from "axios";

const addViews = async (post: any) => {    
    const { data } = await axios.put('/api/add-post', post)

    return data
}

export const useAddPost = () => {
    return useMutation(addViews)
}