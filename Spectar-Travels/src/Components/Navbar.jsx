import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { navIcon } from '../assets'
import { IoMenuSharp, IoClose  } from "react-icons/io5";

const Navbar = () => {
    const [toogle, setToogle] = useState(false)
    
    
/*         const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []); */
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const handleToogle = () => {
        setToogle(!toogle)
    }
  return (
    <div className={`fixed top-0 z-10 w-full sm:p-4 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'} `}>
        <div className=' w-full md:max-w-[1240px] sm:mx-auto flex justify-between items-center py-4 px-6'>
            <div className='flex items-center gap-4'>
                <img src={navIcon} className='h-[30px] md:h-[50px] z-10' alt="nav icon" />
                <p className='font-bold text-xl md:text-2xl'>Spectar Travels</p>
            </div>
            <ul className='hidden lg:flex justify-between items-center underline-none gap-10 '>
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
            <div className='hidden lg:flex bg-blue-600  px-4 py-3   items-center rounded-3xl'>
                <Link to="/contact" className=" ">
                   <p className="font-semibold text-lg  text-white">Contact Us</p>
                </Link>
            </div>
            <div className='flex flex-col lg:hidden'>
                <div onClick={handleToogle}>
                  {!toogle ?  <IoMenuSharp size={40} /> : <IoClose size={40} />}
                </div>
            <ul className={!toogle ? 'fixed left-[-100%]': 'fixed top-0 left-0 w-full  bg-white z-20  underline-none py-6 px-6 space-y-6  transition ease-in-out duration-500 '}>
                <div className='pb-6'>
                <IoClose size={40} onClick={handleToogle} className='float-right' />

                </div>
                <li className='font-semibold text-xl text-center border-b border-slate-400 py-2'>
                 
                    <Link to="/">Home</Link>
                </li>
                <li className='font-semibold text-xl  text-center border-b border-slate-400 py-2'>
                
                    <Link to="/about">About</Link>
                </li>
                <li className='font-semibold text-xl  text-center border-b border-slate-400 py-2'>
                   
                    <Link to="/services">Services</Link>
                </li>
                <li className='font-semibold text-xl text-center border-b border-slate-400 py-2'>
                  
                    <Link to="/tour">Tour</Link>
                </li>
                <li className='font-semibold text-xl text-center border-b border-slate-400 py-2'>
                  
                    <Link to="/visa">Visa</Link>
                </li>
                <li className='bg-blue-600 font-semibold text-xl text-white rounded-2xl  text-center border-b border-slate-400 py-2'>
                  
                    <Link to="/contact">Contact Us</Link>
                </li>
                
            </ul>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar