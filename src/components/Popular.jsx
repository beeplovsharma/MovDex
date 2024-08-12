import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper.jsx";
import SwitchTabs from "./SwitchTabs.jsx";
import useFetch from "../hooks/useFetch.jsx";
import Carousel from "./Carousel.jsx";
function Popular() {
  const [endpoint, setEndpoint] = useState("");
  const onTabChange = (tab) => {
    tab ? setEndpoint("movie") : setEndpoint("tv");
  };

  const [data, loading] = useFetch(`/${endpoint}/popular`);
  console.log(data);
  return (
    <div className="text-[white]">
      <ContentWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[white] font-bold">What's Popular</h1>
            <SwitchTabs
              tabName={["Movies", "TV Shows"]}
              onTabChange={onTabChange}
            />
          </div>

          <div>
            <Carousel
              data={data?.results}
              loading={loading}
              endpoint={endpoint}
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Popular;
