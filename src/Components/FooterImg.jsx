import React from 'react'
import { Link } from 'react-router-dom'
import { viewIcon, Footerpic } from '../assets'

export const FooterTop = (props) => {
    return (
        <div className='w-full '>
        <div className='relative py-20'>
        <div className='m '>
        <img src={props.img} alt="img" className='w-full h-[400px]  z-20 group-hover:opacity-75' />
      </div>
    
      <div className='absolute top-[40%] w-full'>
      <div className=' text-center max-w-[1240px] mx-auto flex flex-col justify-center items-center '>
          <p className='text-xl sm:text-2xl md:text-5xl font-bold text-white'>{props.text}</p>
          <Link to="/tour" className="flex justify-between items-center px-2 py-4 border-none bg-[#2B70EF]  rounded-full w-6/12 md:w-3/12 ">
                        <p className="font-semibold text-lg md:text-xl">Book with us</p>
                        <img src={viewIcon} alt="viewIcon" className="" />
                    
            </Link> 
        </div>
      </div>
    
        </div>
    </div>
           
    
      )
}

const FooterImg = () => {
 return (
    <div>

    </div>
 )
}

export default FooterImg