import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useHomeStore from "../store/homeStore";
import { useNavigate } from "react-router-dom";
import MyImage from "./MyImage";
import ContentWrapper from "./ContentWrapper";
function HeroBanner() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data,loading] = useFetch("/movie/upcoming");
  const { urls ,addImage,backgroundImg} = useHomeStore();
  const queryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    if (Object.keys(data).length > 0 && Object.keys(urls).length > 0) {
      const res =
        urls.urls.backdrop +
        data?.results[Math.floor(Math.random() * data.results.length)]
          .backdrop_path;
      addImage(res);
    }
  }, [urls]);

  return (
    <>
      <div className="heroBanner relative">
        <div className="opacity-70 bg-black min-h-[50vh] md:min-h-[100vh]">
          <MyImage
            src={backgroundImg}
            className={
              "mask-linear mask-dir-to-b object-cover h-[400px] md:h-full"
            }
          />
        </div>
        <ContentWrapper>
          <div className="heroBannerContent absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-[white] leading-none">
            <span className="title text-[4rem] md:text-[6vmax] lg:text-[8vmax] font-semibold">
              Welcome.
            </span>{" "}
            <br />
            <span className="subTitle font-thin">
              Millions of movies, TV Shows and People to discover. Explore Now.
            </span>
            <div className="flex justify-center mt-4">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={queryHandler}
                value={query}
                className="search px-6 py-3 rounded-tl-full text-black rounded-bl-full w-full"
                placeholder="Search for a movie or tv show..."
                type="text"
              />
              <button
                onClick={() => navigate(`/search/${query}`)}
                className="px-6 py-3 bg-gradient-to-r from-orange to-pink rounded-tr-full rounded-br-full"
              >
                Search
              </button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default HeroBanner;
