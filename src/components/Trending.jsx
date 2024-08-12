import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import SwitchTabs from "./SwitchTabs";
import useFetch from "../hooks/useFetch.jsx";
import Carousel from "./Carousel.jsx";
function Trending() {
  const onTabChange = (tab) => {
    tab ? setEndpoint("day") : setEndpoint("week");
  };
  const [endpoint, setEndpoint] = useState("");

  const [data, loading] = useFetch(`/trending/all/${endpoint}`);
  console.log(data);
  return (
    <div className="text-[white]">
      <ContentWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[white] font-bold">Trending</h1>
            <SwitchTabs tabName={["Day", "Week"]} onTabChange={onTabChange} />
          </div>

          <div>
            <Carousel data={data?.results} loading={loading} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Trending;
