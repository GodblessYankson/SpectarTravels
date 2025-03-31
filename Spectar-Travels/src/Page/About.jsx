import React from 'react'
import Tourcard from '../Components/Tourcard'
import { AboutUs, Footerpic } from '../assets'
import { CardImage } from './Services'
import Navbar from '../Components/Navbar'
import AboutText from '../Components/AboutText'
import { FooterTop } from "../Components/FooterImg";
import Footer from "../Components/Footer";
import AboutTeam from '../Components/AboutTeam'



const About = () => {
  return (
    <div>
      <Navbar />
     <CardImage img={AboutUs} text="AboutUs" />  
     <AboutText />
     <AboutTeam />
     <FooterTop img={Footerpic} text="Enjoy the best travel experience now" />
     <Footer />
     <div>
      
      </div>  
    </div>
  )
}

export default About