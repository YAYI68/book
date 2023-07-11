"use client"
import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '../ui/svg'
import UserTableBody from '../table/UserTableBody'
import { Table, UserTableHeader } from '../table'

type Props = {}

const UserDashboardTable = (props: Props) => {
    const [select,setSelect] = useState([])
    const data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='w-full h-full flex flex-col gap-2'>
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
           <Table>
             <UserTableHeader selectedValue={data} setSelectAllRow={setSelect} />
              {data.map((num,i)=>(
            <UserTableBody key={i} rowId={num} selectedNum={select} setSelect={setSelect} />
          ))}
           </Table>
         </div>
         <div className='w-full bg-red h-[3rem] flex justify-center items-center lg:justify-between'>
           <div className='hidden lg:block'>
             <p className='dark:text-white text-[1rem] font-medium'>0 of 100 row(s) selected.</p>
           </div>
           <div className='px-4 w-[70%] flex items-center justify-between lg:w-[30%] p-2'>
             <p className='flex items-center text-[1rem] dark:text-white font-medium gap-2'>page <span>1</span> of <span>10</span> </p>
             <div className='flex items-center gap-4'>
                <button className='flex flex-col border-black dark:border-white items-center justify-center p-2 border rounded-md'>
                  <ChevronLeftIcon className='h-4 w-4 dark:text-white disabled:text-gray-500' />
                </button>
                <button disabled={true} className='flex group disabled:border-gray-500 flex-col items-center border-black dark:border-white justify-center p-2 border rounded-md'>
                  <ChevronRightIcon className='h-4 w-4 dark:text-white group-disabled:text-gray-500' />
                </button>
             </div>
           </div>
         </div>
       </div>
  )
}

export default UserDashboardTable