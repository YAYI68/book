import React from 'react'
import Book from './Book'

type Props = {
    title:string
}

const BookCategoryList = (props: Props) => {
    const { title } = props
  return (
    <div className='bg-white w-full flex flex-col items-center py-[3rem] dark:bg-black'>
    <div className='w-[90%] flex items-center md:items-start flex-col gap-4 '>
     <h3 className='font-semibold text-[1.5rem] dark:text-white'>{title}</h3>
     <div className='w-full flex flex-col gap-4 items-center md:flex-row md:justify-between flex-wrap '>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
     </div>
    </div>
   </div>
  )
}

export default BookCategoryList