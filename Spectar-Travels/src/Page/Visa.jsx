import React, { useState } from 'react'
import { CardImage,  } from './Services'
import { Visapic, Visaimg, VisaRequirementIcon } from '../assets'
import { VisaPrice } from '../constant'
import { Link } from 'react-router-dom'
import { FooterTop } from '../Components/FooterImg'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const Visa = () => {
  const VisaRequirementText = ["Valid Passport: The expiring date in your passport must be 6 months or more from the date of travel", " Passport-sized photograph", "Marriage certificate, applicable if married","Personal Birth Certificate, mandatory for only specific Europe countries like Germany", "Yellow Fever Certificate – Only South Africa and Malaysia visas need this"]
  const [clicked, setClicked] = useState(1)
  const handleClicked = (index) => {
    setClicked(prevIndex => (prevIndex === index ? true : false)) 
  }
  return (
    <div className='w-full'>
      <Navbar />
      <CardImage img={Visaimg} text="Visa" />
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 gap-4 py-10'>
          <img src={Visapic} alt="Visa.img" />
          <div className='flex flex-col  justify-center space-y-4'>
            <p className='text-3xl font-bold '>
              Visa Request Portal
            </p>
            <p className='text-lg font-normal'>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            </p>
          </div>
        </div>
        <div>
          <p className='font-bold text-xl md:text-4xl py-6'>VIsa Requirement</p>
          {VisaRequirementText.map((VisaRequirement) => (
            <div className='flex items-center gap-4 py-2'>
              <img src={VisaRequirementIcon} alt="Visa Requirement Icon" />
              <p className='text-lg font-normal'>
               {VisaRequirement}
              </p>
            </div>
          ))}
        </div>
     
      </div>
      <div className='w-full bg-[#F6F9FF]'>
      <div className='max-w-[1240px] mx-auto'>
          <p className='text-xl md:text-3xl font-bold text-center py-6'>Visa Pricing</p> 
            {VisaPrice.map((item, index) => (
            <div key={index} onClick={() => setClicked (index)} >
              <div className={`grid grid-cols-2  py-2 px-3 border-b border-slate-400  ${clicked === index ? 'font-bold text-2xl bg-green-600 rounded-lg': 'font-semibold text-xl tracking-wide leading-loose'}  ${index === VisaPrice.length - 1 || index === 0 ? "border-none": ""}`}>
                <p className={`${item.id === 1 ? "text-2xl font-bold" : ""}`}>
                  {item.country}

                </p>
                  <p className={`${item.id === 1 ? "text-2xl font-bold" : ""}`}>
                   {item.price}
                 </p>
              </div>

            </div>
          ))}
           
        </div>
      
         <div className='bg-[#2B70EF] text-center w-full md:w-[250px] mx-auto my-6 rounded-full'>
         <Link to="/visabooking" className=" px-3 py-3 rounded-full">
               <p className="font-semibold text-lg md:text-xl text-white">Apply for Visa Now</p>
          </Link>
         </div>
         
      </div>
      <Footer />
    </div>
  )
}

export default Visa




