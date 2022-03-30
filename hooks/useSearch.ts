import { useQuery } from "react-query";
import axios from "axios";

const fetchSearch: any = async (value: any, page: any) => {
  const { data } = await axios.get("api/search", { params: { value: value, page: page } });

  return data;
};

const useSearch: any = (value: any, page: any) => {
  return useQuery(["search", value, page], () => fetchSearch(value, page), {    
    keepPreviousData: true
  });
};

export { useSearch, fetchSearch };
