import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper.jsx";
import SwitchTabs from "./SwitchTabs.jsx";
import useFetch from "../hooks/useFetch.jsx";
import Carousel from "./Carousel.jsx";
function TopRated() {
  const [endpoint, setEndpoint] = useState("");
  const onTabChange = (tab) => {
    tab ? setEndpoint("movie") : setEndpoint("tv");
  };

  const [data, loading] = useFetch(`/${endpoint}/top_rated`);
  console.log(data);
  return (
    <div className="text-[white]">
      <ContentWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[white] font-bold">Top Rated</h1>
            <SwitchTabs
              tabName={["Movies", "TV Shows"]}
              onTabChange={onTabChange}
            />
          </div>

          <div>
            <Carousel data={data?.results} loading={loading} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default TopRated;
