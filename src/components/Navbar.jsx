import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Contact from './Contact'



const Navbar=()=> {
      const [nav, setNav] = useState(true)

      //set nav to the opposite nav value
      const handleNav=()=> {
        setNav(!nav)
      }

  return (
   
    <div className='text-orange-farecalls sticky top-0 text-2xl flex justify-between h-22 px-1 ml-[-10px] pt-5 mr-48'>
        <h1 className=' ml-32 text-3xl font-bold text-[#00FFFF] m-4 '>Fare Calls</h1>
        <hr/>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li> 
            <li className='p-4'>Customer Service</li>
            <li className='p-4'>Tech Support</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        {/* handle nav function */}
        <div onClick={handleNav} className='block md:hidden mt-6'>
        {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className=' text-3xl flex text-center font-bold text-[#00FFFF] m-7 '>Calls Fare Mobile </h1>
            <ul className='p-4 uppercase font-bold '>
            <li className='p-4 border-b border-gray-600 '>Home</li>
            <li className='p-4 border-b border-gray-600 '>About Us</li>
            <li className='p-4 border-b border-gray-600 '>Resources<ul className='dropdrown'>
              
              </ul>
              </li>
            <li className='p-4 border-b border-gray-600 '>About</li>
            <li className='p-4 '>Contact</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar