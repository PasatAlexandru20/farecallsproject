import React from 'react'
import Typed from 'react-typed';

const Hero=()=> {
  return (
    <div className='text-white pt-48 text-gray-600 py-16 px-16'>
        <div className='max-w-[800px] mt-[-96] w-full my-24 mx-auto text-center flex flex-col tracking-wider'>
        <p className='text-2xl  text-[22px] text-[#FFAC1C] font-bold uppercase text-[18px]'>
                Outsource Customer Support agents with us!
            </p>
            <h1 className='md:text-5x1 sm:text-5xl text-4xl font-bold md:py-6 text-[#00FFFF] tracking-wider '>
                Best Outsourcing Solutions
            </h1>
            <div className=' mb-12 flex justify-center items-center'>
        <p className='md:text-4xl sm:text-4xl text-xl font-bold py-5 '>
            <p className='text-[#00FFFF]'>Fast, flexible financing for </p>
        </p>
        <Typed 
        className='  md:text-4xl sm:text-4xl text-xl font-bold pl-2 text-[#FFAC1C]'
           strings={['Develop','Integrate','Balance',]}
           typeSpeed={120}
           backSpeed={140}
           loop
        />
    </div>
    <p className=' mt-4 text-[28px] font-bold text-[#FFAC1C] xs:mb-2'>Monitor your data analytics to increase revenue.</p>
   <button className='bg-cyan-500 hover:bg-cyan-600 w-[250px] h-14 rounded-md font-medium mx-auto mt-2 uppercase ' >Get Started</button>
    </div>
     </div>
  )
}
export default Hero