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
                <img src={navIcon} className='h-[50px] z-10' alt="nav icon" />
                <p className='font-bold text-2xl '>Spectar Travels</p>
            </div>
            <ul className='hidden md:flex justify-between items-center underline-none gap-10 '>
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
            <div className='flex flex-col md:hidden'>
                <div onClick={handleToogle}>
                  {!toogle ?  <IoMenuSharp size={40} /> : <IoClose size={40} />}
                </div>
            <ul className={!toogle ? 'fixed left-[-100%]': 'fixed top-0 left-0 w-full  bg-white z-20  underline-none py-6 px-6 space-y-6  transition ease-in-out duration-500 '}>
                <div className='pb-6'>
                <IoClose size={40} onClick={handleToogle} className='float-right' />

                </div>
                <li className='font-semibold text-xl text-center border-b border-slate-400 py-2'>
                   {/*  <a href="">
                        Home
                    </a> */}
                    <Link to="/">Home</Link>
                </li>
                <li className='font-semibold text-xl  text-center border-b border-slate-400 py-2'>
                  {/*   <a href="">
                        About
                    </a> */}
                    <Link to="/about">About</Link>
                </li>
                <li className='font-semibold text-xl  text-center border-b border-slate-400 py-2'>
                    {/* <a href="">
                        Services
                    </a> */}
                    <Link to="/services">Services</Link>
                </li>
                <li className='font-semibold text-xl text-center border-b border-slate-400 py-2'>
                   {/*  <a href="">
                        Tour
                    </a> */}
                    <Link to="/tour">Tour</Link>
                </li>
                <li className='font-semibold text-xl  text-center border-b border-slate-400 py-2'>
                  {/*   <a href="">
                        Visa
                    </a> */}
                    <Link to="/visa"></Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar