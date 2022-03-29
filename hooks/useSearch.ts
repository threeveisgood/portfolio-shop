import { useQuery } from "react-query";
import axios from "axios";

const fetchSearch = async (value: any, page: any) => {
  const { data } = await axios.get("api/search", { params: { value: value, page: page } });

  return data;
};

const useSearch = (value: any, page: any) => {
  return useQuery(["search", value, page], () => fetchSearch(value, page), {    
    keepPreviousData: true
  });
};

export { useSearch, fetchSearch };
