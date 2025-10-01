import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {useRef} from 'react'
const NavBar = () => {
  const[isScroll,setIsScroll]=useState(false);
  const sideMenuRef=useRef();
  const openMenu=()=>{
    sideMenuRef.current.style.transform='translateX(-16rem)'
  }
  const closeMenu=()=>{
    sideMenuRef.current.style.transform='translateX(16rem)'
  }
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setIsScroll(scrollY>50)
    })
  },[])
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
      </div>
      <nav className={`w-full fixed py-3 px-5 lg:px-8 xl:px-[8%]
        flex items-center justify-between z-50 
        ${isScroll?"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href="#top">
            <Image alt='Ramkumar' src={assets.logo} className='w-30'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-12 py-3 ${!isScroll?'bg-white shadow-sm bg-opacity-50':''} `}>
            <li><a href='#top'>Home</a></li>
            <li><a href='#about'>About me</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button>
              <Image src={assets.moon_icon} alt='' className='w-6'/>
            </button>
            <a href='contact' className='hidden md:flex items-center gap-3
            px-10 py-2.5 border border-grey-500 rounded-full ml-4'>Contact
            <Image src={assets.arrow_icon} alt='contact' className='w-3'/>
            </a>
            <button onClick={openMenu} className="block md:hidden ml-3">
              <Image src={assets.menu_black}  alt='' className='w-6'/>
            </button>
        </div>
        {/* ---mobile menu --- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 x-50 h-screen bg-rose-50 transtion duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className=' w-5 cursor-pointer'/>
          </div>
            <li><a onClick={closeMenu} href='#top'>Home</a></li>
            <li><a onClick={closeMenu} href='#about'>About me</a></li>
            <li><a onClick={closeMenu} href='#skills'>Skills</a></li>
            <li><a onClick={closeMenu} href='#projects'>Projects</a></li>
            <li><a onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
