import Image from 'next/image'
import React from 'react'
import BookLover from '/public/svg/booklover.svg'

type Props = {}

const MyLibraryHero = (props: Props) => {
  return (
    <div className='relative w-full lg:items-center h-[90vh] flex dark:bg-gray-900 flex-col lg:flex-row-reverse shadow-md dark:border-b'>
    <div className=' h-full w-full lg:w-[55%] flex items-center justify-center '>
      <Image src={BookLover} alt='' className='h-full w-full lg:h-[80%]' />
    </div>
    <div className=' px-4 py-2  flex flex-col justify-center lg:justify-start  lg:w-[40%] h-[40%]  lg:left-[5%] lg:top-[30%] '>
      <div className='w-full'>
      <h1 className='text-[1.8rem]  md:text-[3rem] font-bold text-black dark:text-white'>Build your library </h1>
      </div>
      <p  className='text-gray-600 dark:text-gray-300 text-[1rem] md:text-[1.5rem] font-medium'>Read all saved and downloaded books at your convenience  </p>
      <div className=' flex flex-col mt-[2rem] gap-4 md:mt-[1rem] w-full md:w-[90%] md:flex-row'>
          <button className='text-center hover:-translate-y-1 hover:bg-red-700 px-4 md:w-[45%] md:text-[1.5rem] p-2 bg-red-500 text-white'>View all</button>
       </div>
    </div>
  </div>
  )
}

export default MyLibraryHero