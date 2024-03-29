import { useQuery } from "react-query";
import { fetchCategory } from "api-codes/fetchCategory";

export default function useCategory(value: string, page: number) {
  return useQuery(["category", value, page], () => fetchCategory(value, page), {
    keepPreviousData: true,
  });
}
