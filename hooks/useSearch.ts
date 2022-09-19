import { useQuery } from "react-query";
import { fetchSearch } from "api/fetchSearch";

const useSearch = (value: string | string[] | undefined, page: number) => {
  return useQuery(["search", value, page], () => fetchSearch(value, page), {
    keepPreviousData: true,
  });
};

export { useSearch };
