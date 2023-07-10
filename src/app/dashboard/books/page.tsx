import { SearchIcon } from '@/components/ui/svg'
import Table from '@/components/ui/table/Table'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='w-full h-full'>
       <div className='w-full h-full flex flex-col gap-4'>
         <div className='w-full'>
         <p className='dark:text-white font-semibold text-[2rem] text-center lg:text-start lg:text-[3rem]'>Welcome back! </p>
          <p className='dark:text-gray-400 text-center lg:text-start'>Here is a list of all the books</p>
         </div>
         <div className='w-full flex flex-col items-center lg:items-start'>
           <div className='w-[80%] lg:w-[40%] rounded-[.5rem] flex items-center border border-black dark:border-gray-400 p-1'>
            <input type="text" placeholder='filter by book title or author' className='w-[90%] focus:outline-none p-1 bg-transparent dark:text-gray-400'/>
            <button className='flex items-center justify-center w-[10%]'><SearchIcon classname='h-[70%] w-[70%] lg:w-[50%] lg:h-[50%] dark:text-white' /></button>
           </div>
         </div>

         <div className='w-full overflow-x-scroll mt-[2rem]'>
           <Table />
         </div>
        
       </div>
    </section>
  )
}

export default page