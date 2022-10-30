import axios from "axios";
import { useQuery } from "react-query";
const url = "http://localhost:4000/details";

const FetchSingleData = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${url}/${id}`);
};

const useSingleData = (id) => {
  return useQuery(["FetchSingleData", id], FetchSingleData);
};

export default useSingleData;
