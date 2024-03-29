import { useQuery } from "react-query";
import { fetchSearch } from "api-codes/fetchSearch";

const useSearch = (value: string, page: number) => {
  return useQuery(["search", value, page], () => fetchSearch(value, page), {
    keepPreviousData: true,
  });
};

export { useSearch };
