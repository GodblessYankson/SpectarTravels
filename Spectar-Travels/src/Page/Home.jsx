import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import TredLocation from "../Components/TredLocation";
import Testimonials from "../Components/Testimonials";
import { FooterTop } from "../Components/FooterImg";
import { Footerpic } from "../assets";
import Footer from "../Components/Footer";
import { TourPackagesText } from "../Components/Tourcard";
import Tourcard from "../Components/Tourcard";

const Home = () => {
 // const [CityType, setCityType] = useState("All");
  //const [buttonClicked, setbuttonClicked] = useState(0);
  const [cateGory, setCageGory] = useState("All");
  
   return (
    <div>
      <Navbar />
      <HomeHero />
      <TredLocation />
      <TourPackagesText cateGory={cateGory} setCageGory={setCageGory} />
      <Tourcard  cateGory={cateGory} setCageGory={setCageGory}  start={0} end={3}/> 
      <Testimonials />
      <FooterTop img={Footerpic} text="Enjoy the best travel experience now" />
      <Footer />
    </div>
  );
};

export default Home;
