import { useQuery } from "react-query";
import axios from "axios";

export { useTrends, fetchTrends };

const fetchTrends: any = async () => {
  const { data } = await axios.get("api/trends");

  return data;
};

const useTrends: any = () => {
  return useQuery(["trends"], () => fetchTrends());
};
