import React from 'react'
import { tour } from '../constant'
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>
            {tour.slice(0, 3).map((item, index) => (
                <Link key={index} to={`/tour/${item.id}`}>
                    <div className='relative'>
                        <img src={item.src} alt={item.name} className='w-full'/>
                        <div className='flex items-center gap-6 absolute bottom-0 px-5'>
                            <p className='text-2xl font-bold text-white'>{item.name}</p>
                            <img src={item.arrow} alt={item.name} className='px-3 py-2 rounded-full bg-[#69E2A9]' />
                        </div>
                    </div>
                </Link>
            ))} 
        </div>
    </div>
  )
}

export default Location