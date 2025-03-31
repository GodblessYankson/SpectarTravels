import React, { useState } from "react";
import { TestPic, testStar, testicon, } from "../assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonials = ({clicked, handleClicked}) => {
  const [showTestimonials, setshowTestimonials] = useState(false)

  const handleshow = () => {
    setshowTestimonials(!showTestimonials)
  }
  const handleSlides = () => {
    handleshow(!showTestimonials)
    
  } 
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="text-center py-16">
          <p className="font-semibold text-xl text-[#69E2A9]">Testimonials</p>
          <p className="text-3xl font-bold">Satisfied Clients Speak</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src={TestPic} alt="TestPic" />
          </div>
          <div className="flex flex-col justify-center lg:space-y-6 ">
            <div className="float-right flex justify-end gap-6">
              <button
                onClick={handleClicked}
                className={`border border-slate-500 px-4 py-3 rounded-full ${
                  clicked ? "bg-blue-600 text-white" : "bg-white"
                }`}>
                <IoIosArrowBack size={30} />
              </button>
              <button
                onClick={handleClicked}
                className={`border border-slate-500 px-4 py-3 rounded-full ${
                    !clicked ? "bg-blue-600 text-white" : "bg-white"
                  }`}>
                <IoIosArrowForward size={30} />
              </button>
            </div>
            <img src={testStar} alt="star" />
            {clicked ? (
              <div>
                <p className="font-bold text-3xl ">"We were extremely satisfied with the experience"</p>
                <p className="font-semibold text-xl text-[#8A8F96] ">
                  I booked a 3 day Kenya safari cruise for my parents and I, We
                  were extremely satisfied with the experience definitely
                  booking with them in the future
                </p>
              </div>
            ) : (
              <div>
                <p className="font-bold text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="font-semibold text-xl text-[#8A8F96]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolor ut autem recusandae aspernatur, necessitatibus consectetur! Quos, tempore voluptates? Dolor?
                </p>
              </div>
            )}
            <div className="flex items-center gap-6 md:py-3">
              <img src={testicon} alt="testicon" className="w-[70px] h-[70px]" />
              <div>
                <p className="text-xl font-semibold">Bodwill Kofi Mensah</p>
                <span className="text-lg text-[#8A8F96]">Explorer, Georor</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
