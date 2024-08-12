import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function CircularRating({ rating, bg = true, txtColor = "black"}) {
  return (
    <>
      <div className="w-[40px] block">
        <CircularProgressbar
          value={rating * 10}
          text={`${rating}`}
          backgroundPadding={2}
          background={bg}
          styles={{
            text: {
              fill: `${txtColor}`,
              fontSize: "30px",
              fontWeight: "bold",
            },
            path: {
              stroke: "green",
            },
            background: {
              fill: "white",
            },
          }}
        />
      </div>
    </>
  );
}

export default CircularRating;
