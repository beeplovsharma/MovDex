import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import useHomeStore from "../store/homeStore";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import MyImage from "../components/MyImage";
import dayjs from "dayjs";
import Genres from "../components/Genres";
import CircularRating from "../components/CircularRating";

const DetailsBanner = () => {
  const { mediaType, id } = useParams();
  const [data, loading] = useFetch(`${mediaType}/${id}`);
  const { urls } = useHomeStore();
  console.log(data);
  console.log(urls);
  const _genres = data?.genres?.map((g) => g.id);
  return (
    <div className=" w-full h-[200vh] relative">
      {loading ? (
        <div className="text-[white]">Loading...</div>
      ) : (
        <div className="">
          <div className="opacity-15 absolute mask-linear mask-dir-to-b">
            <MyImage src={urls?.urls?.backdrop + data?.backdrop_path} />
          </div>
          <ContentWrapper>
            <div className="content pt-20 md:flex gap-10">
              <div className="left md:w-[500px]">
                <MyImage
                  className="rounded-[10px]"
                  src={urls?.urls?.poster + data?.poster_path}
                />
              </div>

              <div className="right text-[white] ">
                <h1 className="text-[3vmax]">
                  {data.name || data.title} (
                  {dayjs(data?.release_date).format("YYYY")})
                </h1>
                <h3 className="opacity-60 italic pb-3">{data.tagline}</h3>
                <div>
                  <Genres data={_genres} />
                </div>
                <div className="py-4 flex justify-start items-center gap-4">
                  <CircularRating
                    rating={data?.vote_average?.toFixed(1)}
                    bg={false}
                    txtColor="white"
                  />
                  (Watch Trailer)
                </div>

                <div>
                  <h1 className="text-[20px] font-bold">Overview</h1>
                  {/* <h3 className="w-[50%]">{data.overview}</h3> */}
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
