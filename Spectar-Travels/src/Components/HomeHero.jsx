import React from 'react'
import { Hero, HomeDest, HomeCalendar, Search } from '../assets'

const HomeHero = () => {
  return (
     <div className='w-full'> 
    <div className='md:relative w-full'>
        <img src={Hero} alt="Hero.img" className='w-full md:h-[700px] inset-0'/>
        <div className='md:absolute bottom-[-3rem]  w-full mx-auto space-y-4  md:space-y-10'>
            <div className='max-w-[1240px] mx-auto text-black sm:text-white py-4'>
            <p className='font-bold text-3xl md:text-7xl py-6 '>
            A Comprehensive
                 <br /> 
            travel just for you</p>
            <span className='text-black sm:text-[#F1F1F2] text-xl font-semibold'>
             We specialize in crafting unforgetable travel experiences
             <br />
             both locally and internationally</span>
            </div>
            <div className='bg-white  max-w-[1240px] mx-auto rounded-4xl '>
                <div className='py-10 px-4 shadow-2xl'>
                    <form action="" className='grid md:grid-cols-2 gap-6 md:divide-x'>
                       <div className=''>
                       <label htmlFor="dest" className='flex gap-4'>
                            <img src={HomeDest} alt="HomeDest.icon" />
                            <p className='text-xl font-semibold '>Destination</p>
                        </label>
                        <input type="text" placeholder='Where is your next tour' className='w-full outline-none text-xl font-semibold p-2 rounded-md'/>
                       </div>
                       <div className='grid grid-cols-3 gap-10'>
                      <div className='col-span-2'>
                      <label htmlFor="dest" className='flex gap-4 '>
                            <img src={HomeCalendar} alt="HomeDest.icon" />
                            <p className='text-xl font-semibold'>Set Date  </p>
                        </label>
                        <input type="text" placeholder='Start Date - End Date' className='w-full outline-none p-2 text-xl font-semibold rounded-md '/>
                      </div>
                        <div className='bg-[#2B70EF] w-15 h-15 sm:w-20 sm:h-20 rounded-full flex justify-center items-center border border-black'>
                        <img src={Search} alt="Search.img" className='' />
                       </div>
                       </div>
                      
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div> 
   
  )
}

export default HomeHero
