import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery } from "react-query";

const url = "http://localhost:4000/details";

const getDetails = () => axios.get(url);

const ReactQuery = () => {
  // select help us to target a specific data from the parent data
  const { data, isLoading, error, isError, isFetching } = useQuery(
    "details",
    getDetails,
    {
      select: (data) => {
        const title = data.data.map((details) => details.title);
        return title;
      },
    }
  );

  console.log({ isFetching, isLoading }, "isFetching");

  if (isLoading) return <h2>Loading......</h2>;
  if (isError) return <h2>{error?.message}</h2>;
  console.log(data);
  return (
    <div>
      <NavBar />
      ReactQuery
      {data && data.slice(0, 5).map((title) => <h2 key={title}>{title}</h2>)}
    </div>
  );
};

export default ReactQuery;
