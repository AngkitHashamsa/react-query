import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:4000/details";

const getDetails = () => axios.get(url);

const ReactQuery = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isError, isFetching } = useQuery(
    "details",
    getDetails
  );

  console.log({ isFetching, isLoading }, "isFetching");

  if (isLoading) return <h2>Loading......</h2>;
  if (isError) return <h2>{error?.message}</h2>;

  return (
    <div>
      <NavBar />
      ReactQuery
      {data &&
        data?.data.slice(0, 5).map((item) => (
          <div key={item?.id}>
            {item?.id}
            <p>{item?.title}</p>
            <button onClick={() => navigate(`/single/${item?.id}`)}>
              details
            </button>
          </div>
        ))}
    </div>
  );
};

export default ReactQuery;
