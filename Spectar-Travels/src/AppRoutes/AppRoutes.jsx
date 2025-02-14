import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from '../Page/Home'
import About from '../Page/About'
import Services from '../Page/Services'
import Tour from '../Page/Tour'
import Visa from '../Page/Visa'
import LocationDetails from '../Components/LocationDetails'
import NotFound from '../Components/NotFound'


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/tour" element={<Tour />} />
            <Route exact path="/visa" element={<Visa />} />
            <Route exact path='/tour/:id' element={<LocationDetails />} />
            
            <Route path="*" element={<NotFound />} />
            
            
        </Routes>
    </div>
  )
}

export default AppRoutes