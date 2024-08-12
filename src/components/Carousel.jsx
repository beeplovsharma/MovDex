import React from "react";
import PosterFallback from "../assets/no-poster.png";
import ContentWrapper from "./ContentWrapper";
import useHomeStore from "../store/homeStore.js";
import { useNavigate } from "react-router-dom";
import MyImage from "./MyImage.jsx";
import dayjs from "dayjs";
import CircularRating from "./CircularRating.jsx";
import Genres from "./Genres.jsx";
function Carousel({ data, loading, endpoint }) {
  const { urls, genres } = useHomeStore();
  const navigate = useNavigate();
  return (
    <div className="carousel mb-5">
      <ContentWrapper>
        <div className="relative">
          <div className="flex gap-2 overflow-x-scroll no-scrollbar cursor-auto">
            {data?.map((item, i) => {
              const posterUrl = item.poster_path
                ? urls.urls.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={i}
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                  className="flex-shrink-0"
                >
                  <div className="posterBlock relative">
                    <MyImage
                      className="w-[13vmax] md:w-[15vmax] rounded-lg"
                      src={posterUrl}
                      alt={item.title}
                    />
                    <div className="absolute bottom-[-10px] left-[10px]">
                      <CircularRating rating={item.vote_average.toFixed(1)} />
                    </div>
                  </div>
                  <div className="textBlock text-[10px] w-[110px] lg:w-52">
                    <Genres data={item.genre_ids.slice(0, 2)} />
                    <h1 className="text-lg">{item.title || item.name}</h1>
                    <h1>
                      {dayjs(item.release_date || item.first_air_date).format(
                        "MMM D,YYYY"
                      )}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
