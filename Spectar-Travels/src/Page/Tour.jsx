import React, { useState } from 'react'
import Tourcard, { TourPackagesText } from '../Components/Tourcard'
import Footer from '../Components/Footer'

const Tour = () => {
    const [cateGory, setCageGory] = useState('All')
  
  return (
    <div className='bg-[#F6F9FF]'>
      <TourPackagesText cateGory={cateGory} setCageGory={setCageGory} />
      <Tourcard cateGory={cateGory} setCageGory={setCageGory} />
      <Footer />
    </div>
  )
}

export default Tour