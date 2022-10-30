import { useQuery } from "react-query";
import axios from "axios";
const url = "http://localhost:4000/details";

const getDetails = () => axios.get(url);
const useDetails = (onSuccess, onError) => {
  const { data, isLoading, error, isError, isFetching } = useQuery(
    "details",
    getDetails,
    {
      onSuccess,
      onError,
    }
  );
  return { data, isLoading, error, isError, isFetching };
};

export default useDetails;
