import { useQuery } from "react-query";
import { fetchCategory } from "api/fetchCategory";

export default function useCategory(
  value: string | string[] | undefined,
  page: number
) {
  return useQuery(["category", value, page], () => fetchCategory(value, page), {
    keepPreviousData: true,
  });
}
