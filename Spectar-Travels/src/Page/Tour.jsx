import React from 'react'
import Tourcard, { TourPackagesText } from '../Components/Tourcard'
import Footer from '../Components/Footer'

const Tour = () => {
  return (
    <div className='bg-[#F6F9FF]'>
      <TourPackagesText />
      <Tourcard />
      <Footer />
    </div>
  )
}

export default Tour