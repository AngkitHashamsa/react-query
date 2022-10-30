import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery } from "react-query";

const url = "http://localhost:4000/details";

const getDetails = () => axios.get(url);

const ReactQuery = () => {
  const onSuccess = (data) => {
    console.log("success", data);
  };
  const onError = () => {
    console.log("error");
  };

  const { data, isLoading, error, isError, refetch } = useQuery(
    "details",
    getDetails,
    {
      onSuccess,
      onError,
    }
  );

  if (isLoading) return <h2>Loading......</h2>;
  if (isError) return <h2>{error?.message}</h2>;

  return (
    <div>
      <NavBar />
      ReactQuery
      <button onClick={refetch}>Fetch details</button>
      {data &&
        data?.data?.slice(0, 5).map((item) => (
          <div key={item?.id}>
            {item?.id}
            <p>{item?.title}</p>
          </div>
        ))}
    </div>
  );
};

export default ReactQuery;
