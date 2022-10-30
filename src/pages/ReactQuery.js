import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery } from "react-query";

const urlDetail = "http://localhost:4000/details";
const bodyUrl = "http://localhost:4000/body";
const getDetails = () => axios.get(urlDetail);
const getBody = () => axios.get(bodyUrl);
const ReactQuery = () => {
  // cache time default is 5 min
  const { data, isLoading, error, isError, isFetching } = useQuery(
    "details",
    getDetails
  );

  const { data: body } = useQuery("boyd", () => getBody());
  console.log({ body, isLoading }, "isFetching");

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
          </div>
        ))}
    </div>
  );
};

export default ReactQuery;
