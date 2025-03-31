import React from 'react'
import { Aboutpic, AboutTarget, Aboutshade } from '../assets'
import { useState } from 'react'
import Testimonials from './Testimonials'
const AboutText = () => {
/*   const [clicked, setclicked] = useState(0)
   const handleClicked = (index) => {
      setclicked(prevIndex => (prevIndex === index ? null : index ))
  }  */
   const [clicked, setClicked] = useState(true);
    const handleClicked = () => {
    /*   setClicked((prevIndex) => (prevIndex === index ? false : index)); */
    setClicked(!clicked)
    };
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto'>
           <div>
           <p className='text-2xl font-bold text-center py-4'>Welcome to your premier travel & tourism partner based in the heart of Ghana</p>
            <p className='text-xl tracking-tighter leading-loose py-4'>
            We specialize in crafting unforgettable travel experiences, both locally and internationally. Whether you’re seeking the rich cultural heritage of Ghana, breathtaking landscapes, or exciting global adventures, we have the perfect packages designed to meet your unique travel desires.
            </p>
            <p className='text-xl tracking-tighter leading-loose py-4'>
            At Spectar Travel, we pride ourselves on our commitment to excellence, personalized service, and deep knowledge of the destinations we offer. Our dedicated team of travel experts works closely with you to create tailored itineraries that ensure every journey is memorable.
            </p>
            <p className='text-xl tracking-tighter leading-loose py-4'>
            Join us as we explore the beauty of Ghana and beyond, making your travel dreams a reality. Let’s embark on an extraordinary adventure together!
            </p>
           </div>
            <div className='py-6'>
                <img src={Aboutpic} alt="About Text" />
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
                <div onClick={handleClicked} className={`py-10 text-xl px-6 space-y-4 rounded-2xl shadow ${clicked  ? 'bg-blue-300' : ""}`}>
                    <img src={AboutTarget} alt="About.img" />
                   <div className='space-y-4'>
                    <p className='text-2xl md:text-4xl font-bold'>Our Mission</p>
                    <p className=''>
                    At Spectar Travel, our mission is to provide exceptional travel experiences that inspire curiosity and adventure. We are dedicated to offering personalized travel solutions that cater to both local and international destinations, with a special focus on showcasing the beauty and diversity of Africa. Through our commitment to quality, integrity, and exceptional service, we aim to create lasting memories for our clients while promoting cultural understanding and sustainable tourism practices.
                    </p>
                   </div>
                </div>
                <div onClick={handleClicked} className={`py-10 text-xl px-6 space-y-4 rounded-2xl shadow ${!clicked ? 'bg-blue-300' : ""}`}>
                    <img src={Aboutshade} alt="About.img" />
                   <div className='space-y-4'>
                    <p className='text-2xl md:text-4xl font-bold'>Our Mission</p>
                    <p>
                    At Spectar Travel, our mission is to provide exceptional travel experiences that inspire curiosity and adventure. We are dedicated to offering personalized travel solutions that cater to both local and international destinations, with a special focus on showcasing the beauty and diversity of Africa. Through our commitment to quality, integrity, and exceptional service, we aim to create lasting memories for our clients while promoting cultural understanding and sustainable tourism practices.
                    </p>
                   </div>
                </div>
            </div>
        </div>
        <Testimonials clicked={clicked} setClicked={setClicked} handleClicked={handleClicked}/>
    </div>
  )
}

export default AboutText