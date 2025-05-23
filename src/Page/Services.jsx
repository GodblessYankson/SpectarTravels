import React from 'react'
import { TravelPlan, visaAssist, GroupTravel, FamilyVac, viewIcon, BussinesTravel, Servicespic } from '../assets'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'



export const CardImage = (props) => {
 return (
    <div className='w-full bg-transparent'>
        
       
       <div className='relative'>
        <img src={props.img} alt="img" className='w-full h-[500px] md:[700px] object-cover z-20 group-hover:opacity-75' />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='max-w-[1240px] mx-auto'>
      <div className='absolute bottom-15'>
        <p className='text-4xl md:text-7xl font-bold text-white'>{props.text}</p>
      </div>
      </div>
      </div>
      
    </div>
 )
}
export const Services1 = (props) => {
  return (
   <div className='w-full'>
     <div className='max-w-[1240px] mx-auto py-10'>
     <div className='grid md:grid-cols-2 gap-6'>
      <div className='flex flex-col justify-center space-y-6'>
        <p  className='text-xl md:text-4xl font-bold'>{props.title}</p>
        <p className='text-lg md:text-xl font-semibold'>{props.content}</p>
        <Link to="/tour" className="flex justify-between items-center px-2 py-4 border border-slate-500 rounded-full w-6/12 md:w-4/12 ">
                    <p className="font-semibold text-lg md:text-xl">Book Now</p>
                    <img src={viewIcon} alt="viewIcon" className="" />
                
          </Link> 
      </div>
      <div>
        <img src={props.img} alt="img" />
      </div>
    </div>
     </div>
   </div>
  )
}

export const Services2 = (props) => {
  return (
    <div className='w-full'>
    <div className='max-w-[1240px] mx-auto py-10'>
    <div className='grid md:grid-cols-2 gap-6'>
    
     <div>
       <img src={props.img} alt="img" />
     </div>

     <div className='flex flex-col justify-center space-y-6'>
       <p  className='text-xl md:text-4xl font-bold'>{props.title}</p>
       <p className='text-lg md:text-xl font-semibold'>{props.content}</p>
       <Link to="/tour" className="flex justify-between items-center px-2 py-4 border border-slate-500 rounded-full w-6/12 md:w-4/12">
                   <p className="font-semibold text-lg md:text-xl">Book Now</p>
                   <img src={viewIcon} alt="viewIcon" className="" />
               
         </Link> 
     </div>
   </div>
    </div>
  </div>
  )
}
const Services = () => {
  return (
    <div>
      
      <Navbar />

      <CardImage img={Servicespic} text="Services" />

      <Services1 title="Travel Planning"  content="At Spectar Travel, we believe that the journey begins long before you board the plane. Our comprehensive travel planning services are designed to turn your dream vacation into a seamless reality. Whether you're looking for a quick getaway or an extended adventure, our expert team is here to guide you every step
    of the way." img={TravelPlan}/>

      <Services2 title="Group Travel" content="We understand that the best adventures are the ones shared with friends, family, or colleagues. Our Group Travel Planning Services are designed to create unforgettable experiences for groups of all sizes, whether you’re organizing a family reunion, a corporate retreat, a school trip, or a getaway with friends. Let us handle the details so you can focus on making memories togethe"
      img={GroupTravel} />

      <Services1 title="Business Travel"  content="At Spectar Travel, we understand that time is money, especially when it comes to business travel. Our Business Travel Services are designed to cater to the unique needs of corporate travelers, ensuring a seamless and productive travel experience from start to finish
    " img={BussinesTravel}/>


    <Services2 title="Family Vacation"  content="We believe that family vacations are about creating cherished memories that last a lifetime. Our Family Vacation Planning Services are designed to help you experience the perfect getaway that caters to every member of the family, ensuring excitement, adventure, and relaxation for everyone.
    " img={FamilyVac}/> 
   
   <Services2 title="Visa Assistance"  content="Navigating the visa application process can be daunting, especially when planning your travel abroad. At Spectar Travel, we provide comprehensive Visa Assistance Services to ensure you have everything you need for a smooth and hassle-free journey. Our expert team is dedicated to guiding you through the complex world of visa applications, allowing you to focus on your travel plans with confidence
    " img={visaAssist}/>

    </div>
  )
}

export default Services