import React from "react";
import PropTypes from "prop-types";
import { TourPackages } from "../constant";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const CATEGORY_TABS = ["All", "Dubai", "Europe", "Kenya", "Ghana"];
export const TourPackagesText = ({ cateGory, setCageGory }) => (
  <div className="w-full">
    <div className="max-w-[1240px] mx-auto py-16">
      <p className="text-[#69E2A9] text-xl md:text-2xl font-semibold">
        EXPLORE OUR POPULAR PACKAGES
      </p>
      <p className="text-black font-bold text-3xl md:text-6xl">Tour Packages</p>
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center gap-4">
          {CATEGORY_TABS.map((tab) => (
            <Link
              onClick={() => setCageGory(tab)}
              className={`px-4 py-3 border border-[#2B70EF] text-xl font-semibold rounded-full ${
                cateGory === tab && "bg-[#2B70EF] text-white shadow-2xl"
              }`}>
              {tab}
            </Link>
          ))}
        </div>

        <Link className="border border-[#E6E7E8] flex justify-between gap-3 items-center px-2 py-3 rounded-full shadow-2xl">
          <p className="text-2xl">View More</p>
          <IoIosArrowForward size={30} />
        </Link>
      </div>
    </div>
  </div>
);

const Tourcard = ({ cateGory, start = 0, end = TourPackages.length }) => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
        {TourPackages.filter((item) => {
          if (cateGory === "All") return true;

          return item.country.toLowerCase().includes(cateGory.toLowerCase());
        })
          .slice(start, end)
          .map((item, index) => (
            <div key={index}>
              <div>
                <img src={item.src} alt="" />
                <div className="py-4 ">
                  <h1 className="text-3xl font-bold">{item.name}</h1>
                  <div className="flex gap-8 items-center py-4">
                    <div className="flex gap-2 item center">
                      <img
                        src={item.locationIcon}
                        alt="destination"
                        className="w-[20px] h-[30px] "
                      />
                      <p className="text-xl font-semibold">Dubai, UAE</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src={item.clockIcon}
                        alt="trip"
                        className="w-[20px] h-[25px]"
                      />
                      <p className="text-xl font-semibold">
                        {item.durationtime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <img src={item.calendarIcon} alt="date" />
                    <p className="text-xl font-semibold">{item.durationdays}</p>
                  </div>
                  <div className="flex items-center justify-between mx-4">
                    <p className="text-2xl font-bold">{item.price}</p>
                    <Link
                      to="./Visa"
                      className="border border-[#E6E7E8] py-3 px-4 rounded-3xl md:w-[100px] md:h-[50px]">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tourcard;
