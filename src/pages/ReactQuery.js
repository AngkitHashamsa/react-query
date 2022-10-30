import React from "react";
import NavBar from "../components/NavBar";
import useDetails from "../hooks/useDetailsData";

const ReactQuery = () => {
  // cache time default is 5 min
  const onSuccess = () => {
    console.log("onSuccess");
  };
  const onError = () => {
    console.log("onError");
  };
  const { data, isLoading, error, isError, isFetching } = useDetails(
    onSuccess,
    onError
  );

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
