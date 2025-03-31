import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from '../Page/Home'
import About from '../Page/About'
import Services from '../Page/Services'
import Tour from '../Page/Tour'
import Visa from '../Page/Visa'
import LocationDetails from '../Components/LocationDetails'
import NotFound from '../Components/NotFound'
import ContactUs from '../Page/ContactUs'
import VisaBooking from '../Components/VisaBooking'
import Bookings from '../Components/Bookings'
import Trials from '../Components/Trials'
import Board from '../Components/Board'
const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/tour" element={<Tour />} />
            <Route exact path="/visa" element={<Visa />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/visabooking" element={<VisaBooking />} />
            <Route exact path="/booking" element={<Bookings />} />
            <Route exact path="/trial" element={<Trials />} />
            <Route exact path="/tictac" element={<Board />} />
            <Route exact path='/tour/:id' element={<LocationDetails />} />
            
            <Route path="*" element={<NotFound />} />
            
            
        </Routes>
    </div>
  )
}

export default AppRoutes