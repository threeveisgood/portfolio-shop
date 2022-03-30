import { useQuery } from "react-query";
import axios from "axios";

const fetchCategory = async (value: any, page: any) => {
  const { data } = await axios.get("api/category", { params: { value: value, page: page } });

  return data;
};

const useCategory = (value: any, page: any) => {
  return useQuery(["category", value, page], () => fetchCategory(value, page), {    
    keepPreviousData: true
  });
};

export { useCategory, fetchCategory };
