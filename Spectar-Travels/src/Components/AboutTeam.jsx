import React, { useState } from 'react'
import { Team } from '../constant'

const AboutTeam = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto py-10'>
            <p className='text-4xl font-bold text-center py-6'>Our Team</p>
           <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
            {Team.map((item,index) => (
                <div 
                key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative inline-block m-4 ${hoveredIndex === index && 'border-b-[5px] border-blue-700'}`}
                >
                    <div>
                        <img src={item.src} alt="img" />
                    </div>
                  {hoveredIndex === index && (
                      <div className='absolute bottom-4 text-[#1a1a1a]'>
                      <p className='text-2xl font-bold'>{item.name}</p>
                      <p className='text-xl font-semibold'>{item.jobTitle}</p>
                  </div>
                  )}
                </div>
            ))}
           </div>
        </div>
    </div>
  )
}

export default AboutTeam