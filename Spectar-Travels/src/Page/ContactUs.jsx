import React from 'react'
import { ContactImg, destination, HomeDest, MapImg } from '../assets'
import { CardImage } from './Services'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import { ContactText } from '../constant';
import VisaBooking from '../Components/VisaBooking';

import Navbar from '../Components/Navbar'
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

const ContactUs = () => {
  return (
    <div className='w-full '>
      <Navbar />
      <CardImage img={ContactImg} text="Get In Touch" alt="contact.img" className="text-blue-500"/>
        <div className='max-w-[1240px] mx-auto '>
           <div className='grid md:grid-cols-3 gap-6 mx-2 my-10'>
             <div className='space-y-6 flex flex-col justify-center'>
                   {ContactText.map((item, index) => (
                      <div key={index} className='space-y-2'>
                         {item.title === "Location" && (
                            <div className='space-y-1 text-xl md:text-2xl'>
                              <div className='flex items-center'>
                              <CiLocationOn size={30} className='text-[#2B70FE]' />
                              <p>{item.title}</p>
                              </div>
                              <p>{item.avenue}</p>
                              <p>{item.city}</p>
                              <p>{item.address}</p>
                            </div>             
                         )}
                         {item.title === "Email" && (
                          <div className='space-y-1 text-xl md:text-2xl'>
                            <div className='flex items-center'>
                              <MdOutlineMail size={30} className='text-[#2B70FE]'/>
                              <p>{item.title}</p>
                            </div>
                            <p>{item.email}</p>
                          </div>
                         )}
                         {item.title === "Phone" && (
                            <div className='space-y-1 text-xl md:text-2xl'>
                              <div className='flex items-center'>
                                <MdOutlineLocalPhone size={30} className='text-[#2B70FE]'/>
                                <p>{item.title}</p>
                              </div>
                              <p>{item.phone}</p>
                              <p>{item.phone2}</p>
                            </div>
                         )}
                      </div>
                   ))}       
             </div>
             <div className='col-span-2'>
               <ContactForm />
             </div>
           </div>
        </div>
        <img src={MapImg} alt="Map Img" className='w-full object-cover' />
        <Footer />
    </div>
  )
}

export default ContactUs