import Image from 'next/image'
import React from 'react'
import BookHeroImg from '/public/images/book_hero.webp'

type Props = {}

const BookHero = (props: Props) => {
  return (
    <div className='relative w-full lg:items-center h-[90vh] flex dark:bg-gray-900 flex-col lg:flex-row-reverse shadow-md dark:border-b'>
    <div className=' h-full w-full lg:w-[55%] md:bend_shape '>
      <Image src={BookHeroImg} alt='' className='h-full w-full' />
    </div>
    <div className=' px-4 py-2  flex flex-col justify-center lg:justify-start  lg:w-[40%] h-[40%]  lg:left-[5%] lg:top-[30%] '>
      <div className='w-full'>
      <h1 className='text-[1.8rem]  md:text-[3rem] font-bold text-black dark:text-white'>Get the best from our platform </h1>
      </div>
      <p  className='text-gray-600 dark:text-gray-300 text-[1rem] md:text-[1.5rem] font-medium'>Access all books saved to library and read them at your conveniece at no extra cost. </p>
    </div>
  </div>
  )
}

export default BookHero