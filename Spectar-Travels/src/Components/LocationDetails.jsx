import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { tour } from '../constant';
import { TourPackages } from '../constant';
import { CardImage } from '../Page/Services';
import Navbar from './Navbar';
import { CiLocationOn, CiCalendar  } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { PicDetailsImg } from '../assets';
import Footer from './Footer';


const LocationDetails = () => {
  
/*   const { id } = useParams()
  const tourId = parseInt(id, 10)
  const selectedTour = tour.find(item => item.id === tourId) */
  
  const { id } = useParams()
  const tourId = parseInt(id, 10)
  const selectedTour = TourPackages.find(item => item.id === tourId)

  return (
    <div>
      <Navbar />
      <CardImage img={selectedTour.src} text={selectedTour.name}/>
      
      <div className='max-w-[1240px] mx-auto py-10'>
          <div className='grid md:grid-cols-3 gap-6 py-10'>
              <div className='sm:col-span-1 md:col-span-2'>
              <img src={selectedTour.src} alt="img" className='w-full h-[500px]' />
              </div>
              <div className='cols-span-1'>
              <img src={PicDetailsImg} alt="pic.img" className='h-[500px]' />
              </div>
          </div>
        <div className='rounded-2xl border border-[#E6E7E8] shadow-sm grid md:grid-cols-3 px-3 py-6'>
        <div className='col-span-2'>
          <p className='text-2xl font-bold pb-4'>{selectedTour.name}</p>
            <div className='flex gap-4 items-center pb-4'>
              <div className='flex items-center'>
               
                <CiLocationOn size={30} className='text-[#2B70FE]' />
                 <p className='font-semibold text-lg text-[#8F9297]'>{selectedTour.country}</p>
              </div>
              <div className='flex items-center'>
              <GoClock size={30} className='text-[#2B70FE]' />
                <p className='font-semibold text-lg text-[#8F9297]'>{selectedTour.durationtime}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <CiCalendar size={30} className='text-[#2B70FE]'/>
              <p className='text-[#1a1a1a] font-bold'>{selectedTour.durationdays}</p>
            </div>
            <div className='py-6'>
              <p className='text-[#1F252F] font-semibold text-lg'>Experience the magic and allure of Dubai like never before. From breathtaking skyscrapers to serene desert landscapes, Dubai offers a perfect blend of modern extravagance and cultural richness. Get ready to vibe with Dubai and create memories that will last a lifetime!</p>
            </div>
          </div>
          <div className=' py-3 px-3'>
              <div className='bg-[#F6F9FF] py-5 px-3'>
              <div className='mb-6'>
           <p className='font-bold text-2xl'>{selectedTour.price}</p>
           <p>starting from</p>
           </div>
            <Link to="/booking" className='w-full py-2 px-6  bg-[#2B70FE] rounded-full'>
              <button>Book</button>
            </Link>
              </div>
          </div>
        </div>
      <p>Tour details - {id}</p>
      { selectedTour ? (<div>
          <p>{selectedTour.name}</p>
          <p>{selectedTour.src}</p>
      </div>): (<div>
        <p>Cannot reach this page</p>
      </div>)}

      </div>
      <Footer />
     </div>
  )
}

export default LocationDetails