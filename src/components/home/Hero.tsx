import Image from 'next/image'
import React from 'react'
import HomeHeroImg from '/public/images/home_hero.png'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='relative w-full h-[95vh]'>
      <div className='absolute h-full w-full '>
        <Image src={HomeHeroImg} alt='' className='h-full w-full' />
      </div>
      <div className=' gap-4 w-[85%] px-4 py-2 top-[15%] left-[10%] flex flex-col sm:top-[15%] md:top-[30%] md:w-[65%] lg:w-[40%] h-[60%] absolute lg:left-[5%] lg:top-[30%] '>
        <div className='w-full'>
        <h1 className='text-[2rem] md:text-[3rem] font-bold text-white'> Enjoy  <span className='text-red-500'>Reading</span> From</h1>
        <h1 className='text-[2rem] md:text-[3rem] font-bold text-white'>the comfort of your home</h1> 
        </div>
        <p  className='text-gray-300 text-[1.2rem] md:text-[1.5rem] font-medium'>Get all the academic knowledge you ever need by subscribing and reading our books online at a lower cost.</p>
       <div className=' flex flex-col mt-[2rem] gap-4 md:mt-[1rem] w-full md:w-[90%] md:flex-row'>
          <button className='text-center hover:-translate-y-1 hover:bg-red-700 px-4 md:w-[45%] md:text-[1.5rem] p-2 bg-red-500 text-white'>Read now</button>
          <button className='text-center hover:-translate-y-1 hover:bg-red-700 px-4 p-2 md:w-[45%]  md:text-[1.5rem] bg-red-500 text-white'>Add to library</button>
       </div>
      </div>
    </div>
  )
}

export default Hero