import React from "react";
import useHomeStore from "../store/homeStore";

function Genres({ data }) {
  const {genres} = useHomeStore();
  return (
    <>
      <div className="text-white flex flex-wrap gap-2 w-[150px]">
        {data?.map((id)=>{
            if(!genres[id]) return;
            return (
              <h1 className="bg-pink w-fit text-[10px] px-[6px] rounded-md">
                {genres[id]}
              </h1>
            );
        })}
      </div>
    </>
  );
}

export default Genres;
