import React from "react";
import { viewIcon } from "../assets";
import { Link } from "react-router-dom";
import { tour } from "../constant";
import Location from "./Location";

const TredLocation = () => {
  return (
    <div className="relative w-full text-black md:mt-10 ">
      <div className="max-w-[1240px] mx-auto  md:py-10 space-y-6">
        <div className="grid md:grid-cols-2 px-3">
            <div>
            <p className="text-[#69E2A9] text-xl">DESTINATIONS TO EXPOSE</p>
            <p className="text-black text-2xl font-bold">Trending Locations</p>
            </div>
           <div className="md:flex justify-end">
           <Link to="/tour" className="flex justify-between items-center px-2 py-2 border border-slate-500 rounded-full w-6/12 md:w-5/12 ">
                    <p className="font-semibold text-xl">View more</p>
                    <img src={viewIcon} alt="viewIcon" className="" />
                
            </Link>
           </div>
        </div>
        <div>
          <Location />
        </div>
       
      </div>
    </div>
  );
};
export default TredLocation;
