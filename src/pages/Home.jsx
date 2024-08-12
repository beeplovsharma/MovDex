import React from "react";
import HeroBanner from "../components/HeroBanner";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";

function Home() {
  return (
    <>
      <div className="">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
}

export default Home;
