import React from 'react'
import { viewIcon, facebook, Twitter, instagram, Youtube, Linkedin } from '../assets'
import { Link } from 'react-router-dom'
import { MdCopyright } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Footer = () => {
  return (
    <div className='w-full bg-[#1F252F] py-8 px-4 text-white rounded-2xl'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-between'>
                <p className='text-3xl md:text-5xl font-bold'>Talk to Us</p>
             <Link to="/tour" className="flex justify-between items-center px-2 py-4 mt-2 border-none bg-slate-600  rounded-4xl w-6/12 md:w-4/12 ">
                        <p className="font-semibold text-lg md:text-xl">Contact</p>
                     <IoIosArrowForward size={30}/>                 
            </Link> 
            <div className='flex items-center font-semibold md:text-xl py-6 md:py-10'>
            <MdCopyright />
            <p> 2024 Spectar All Rights Revserved</p>
            </div>
            </div>
           <div className=''>
           <ul className='hidden md:flex gap-6 items-center underline-none pr-6  '>
                <li className='font-semibold text-xl hover:text-[#2B70EF]'>
                  
                    <Link to="/">Home</Link>
                </li>
                <li className='font-semibold text-xl hover:text-[#2B70EF]'>
                   
                    <Link to="/about">About</Link>
                </li>
                <li className='font-semibold text-xl hover:text-[#2B70EF]'>
                  
                    <Link to="/services">Services</Link>
                </li>
                <li className='font-semibold text-xl hover:text-[#2B70EF]'>
                  
                    <Link to="/tour">Tour</Link>
                </li>
                <li className='font-semibold text-xl hover:text-[#2B70EF]'>
                    
                    <Link to="/Visa">Visa</Link>
                </li>
            </ul>
            <div className='py-8'>
                <p>45 Avenues Cococut Street</p>
                <p>Tema - Acrra </p>
                <p>GP 122-00-335</p>
            </div>
            <div className='flex gap-6 py-4'>
                <Link to="">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link>
                  <img src={instagram} alt="facebook" />
                </Link>
                <Link>
                  <img src={Twitter} alt="facebook" />
                </Link>
                <Link>
                  <img src={Linkedin} alt="facebook" />
                </Link>
                <Link>
                  <img src={Youtube} alt="facebook" />
                </Link>      
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer