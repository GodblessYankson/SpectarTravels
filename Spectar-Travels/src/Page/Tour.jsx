import React, { useState } from 'react'
import Tourcard, { TourPackagesText } from '../Components/Tourcard'
import Footer from '../Components/Footer'
import { Tourpic } from '../assets'
import { CardImage } from './Services'
import Navbar from '../Components/Navbar'

const Tour = () => {
    const [cateGory, setCageGory] = useState('All')
  
  return (
    <div className='bg-[#F6F9FF]'>
      <Navbar />
      <CardImage img={Tourpic} text="Tour" />
      <TourPackagesText cateGory={cateGory} setCageGory={setCageGory} />
      <Tourcard cateGory={cateGory} setCageGory={setCageGory} />
      <Footer />
    </div>
  )
}

export default Tour