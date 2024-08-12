import React, { useEffect, useState } from "react";

function SwitchTabs({tabName,onTabChange}) {
  const [tabs, setTabs] = useState(true);
  useEffect(() => {
    onTabChange(tabs);
  }, [tabs])
  
  return (
    <div>
      <div
        onClick={() => setTabs(!tabs)}
        className="relative flex text-[black] font-bold text-sm rounded-full bg-[white] w-[150px] min-w-[180px]"
      >
        <div
 
          className="z-[99] w-1/2 py-2 flex justify-center items-center"
        >
          <button className={`${tabs && "text-[white]"}`}>{tabName[0]}</button>
        </div>
        <div
          className="z-[99] w-1/2 py-2 flex justify-center items-center"
        >
          <button className={`${!tabs && "text-[white]"}`}>{tabName[1]}</button>
        </div>

        <span
          className={`absolute h-full w-1/2  border-2 border-[white] rounded-full top-0 ${
            tabs ? "left-0" : "left-[50%]"
          } bg-gradient-to-r from-orange to-pink duration-300`}
        ></span>
      </div>
    </div>
  );
}

export default SwitchTabs;
