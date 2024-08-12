import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailsBanner from "./DetailsBanner";

function Details() {

  return (
    <div className="w-full min-h-screen">
      <DetailsBanner />
    </div>
  );
}

export default Details;
