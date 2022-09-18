import { useQuery } from "react-query";
import { fetchSearch } from "api/fetchSearch";

// const fetchSearch: any = async (value: any, page: any) => {
//   const { data } = await axios.get("api/search", { params: { value: value, page: page } });

//   return data;
// };

const useSearch = (value: string | string[] | undefined, page: number) => {
  return useQuery(["search", value, page], () => fetchSearch(value, page), {
    keepPreviousData: true,
  });
};

export { useSearch };
