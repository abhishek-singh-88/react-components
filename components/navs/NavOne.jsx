import React, { useState } from 'react'
import { SiHomeadvisor } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FcGallery } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUserSecret } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";
function NavOne() {
  const [click, setClick] = useState(true)
  return ( 
    <>
    <div  className="hidden  justify-between sticky top-0 z-10 py-3 shadow-sm px-14 lg:flex bg-white ">

    <div className="left  flex  gap-4  [&>a]:[:hover]:bg-orange-200 [&>a]:[border-radius:10px]">
        <a className='px-3  py-1 shadow-lg duration-500' href=""><SiHomeadvisor className='inline text-orange-500 mb-1'/> Home</a>
        <a className='px-3 py-1 shadow-lg duration-500' href=""> <FaInfoCircle className='inline text-orange-500 mb-1'/>  About</a>
        <a className='px-3 py-1 shadow-lg duration-500' href=""><IoIosContact className='inline text-orange-500 mb-1'/> Contact Us</a>
    </div>
    <div className="right flex gap-4 [&>a]:[:hover]:bg-orange-200 [&>a]:[border-radius:10px] ">
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <FcGallery className='inline text-orange-500 mb-1'/> Gallery</a>
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <SiGnuprivacyguard className='inline text-orange-500 mb-1'/> SignUp</a>
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <SiGnuprivacyguard className='inline text-orange-500 mb-1'/> SignIn</a>
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <FaUserSecret className='inline text-orange-500 mb-1'/> Profile</a>
    </div>
  
    </div>

<div className="shadow-sm lg:hidden flex justify-between  sticky top-0  z-10 bg-white  pr-3 p-2 ">
  <h3 className='text-3xl text-orange-500 font-extrabold'>AB_NK TEAM</h3>
  <button onClick={()=> setClick(!click) }>
  {click ? <TiThMenu className='text-3xl inline'/> : <GiCrossMark className='text-3xl text-red-500 inline' /> }
  </button>
</div>

    <div  className={`  ${click? 'hidden': 'block'} lg:hidden  w-[200px] p-5 fixed right-0 shadow-lg rounded-2xl `}>
    <div className="left flex flex-col  gap-4  [&>a]:[:hover]:bg-orange-200 [&>a]:[border-radius:10px]">
        <a className='px-3  py-1 shadow-lg duration-500' href=""><SiHomeadvisor className='inline text-orange-500 mb-1'/> Home</a>
        <a className='px-3 py-1 shadow-lg duration-500' href=""> <FaInfoCircle className='inline text-orange-500 mb-1'/>  About</a>
        <a className='px-3 py-1 shadow-lg duration-500' href=""><IoIosContact className='inline text-orange-500 mb-1'/> Contact Us</a>
    </div>
    <br />

    <div className="right flex flex-col gap-4 [&>a]:[:hover]:bg-orange-200 [&>a]:[border-radius:10px] ">
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <FcGallery className='inline text-orange-500 mb-1'/> Gallery</a>
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <SiGnuprivacyguard className='inline text-orange-500 mb-1'/> SignUp</a>
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <SiGnuprivacyguard className='inline text-orange-500 mb-1'/> SignIn</a>
        <a className='px-3 py-1 shadow-lg duration-500 ' href=""> <FaUserSecret className='inline text-orange-500 mb-1'/> Profile</a>
    </div>
    </div>

    </>
  )
}

export default NavOne