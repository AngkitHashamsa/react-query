import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery } from "react-query";

const url = "http://localhost:4000/details";

const getDetails = () => axios.get(url);

const ReactQuery = () => {
  // 1 cache time default is 5 min
  // 2 if we want to show stale time we can set the staleTime default value of stale time is 0
  // 3 by default it is set to true
  // 4 refetch on windowFocus its true for default anytime the window changes sizes or loose focus it refetch
  // 5 refetch at interval it helps to fetch data at interval
  // 6 the interval refetch stops if window looses focus so refetchIntervalInBackground should be set too true
  const { data, isLoading, error, isError } = useQuery("details", getDetails, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchOnMount:true,
    // refetchOnWindowFocus:true,
    // refetchInterval: 3000,
    // refetchIntervalInBackground:true;
  });

  // console.log({ isFetching, isLoading }, "isFetching");

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
