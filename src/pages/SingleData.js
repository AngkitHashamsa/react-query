import React from "react";
import { useParams } from "react-router-dom";
import useSingleData from "../hooks/useSingleData";
const SingleData = () => {
  const { id } = useParams();
  const { data } = useSingleData(id);
  return (
    <div>
      SingleData
      {id}
      {data && (
        <div>
          <h2>{data.data.title}</h2>
        </div>
      )}
    </div>
  );
};

export default SingleData;
