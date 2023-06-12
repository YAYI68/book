import { pacifico } from '@/utils/font'
import Link from 'next/link'
import React from 'react'
import { DarkIcon, SearchIcon } from '../ui/svg'

type Props = {}

const MainNavbar = (props: Props) => {
  return (
    <nav className='hidden h-full w-full lg:flex lg:flex-col lg:items-center  bg-white dark:bg-black dark:text-white border-b-2 dark:border-b-gray-500'>
      <div className='w-[90%]  px-2 h-full flex justify-between items-center'>
      <Link href="/" className={`${pacifico.className} block text-[2rem]`}>Studee</Link>
       <div className='flex items-center justify-between w-[40%]'>
         <ul className='flex items-center gap-4'>
          <li className='p-2 cursor-pointer font-medium text-gray-500 hover:text-black  rounded hover:dark:text-white'><Link href={''} className='w-full'>Books</Link></li>
          <li className='p-2 cursor-pointer font-medium text-gray-500 hover:text-black rounded hover:dark:text-white'><Link href={''} className='w-full'>Genres</Link></li>
          <li  className='w-full p-2 cursor-pointer font-medium text-gray-500 hover:text-black dark:text-gray-400 rounded hover:dark:text-white'><p className='flex items-center gap-2 '><span>Search</span><span><SearchIcon classname='h-[1.3rem] w-[1.3rem]' /></span></p>  </li>         
         </ul>
          {/* UnAuthenticated */}
           <ul className='flex font-medium items-center gap-4'>
            <li className='py-2 px-4 cursor-pointer text-gray-500 hover:text-black rounded hover:dark:text-white border dark:border-gray-500 hover:dark:border-white hover:border-black'><Link className='w-full' href={''}>Login</Link></li>
            <li className='py-2 px-4 cursor-pointer text-gray-500  rounded bg-black hover:text-white dark:bg-white hover:dark:bg-black hover:dark:text-white border hover:dark:border-white hover:border-black'><Link href={''}>Signup</Link></li>
           </ul>
            {/* <div className='h-[2.5rem] w-[2.5rem] rounded-[50%] bg-yellow-400'>

            </div> */}
          <button className='p-2 h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-[50%] border'>
           <DarkIcon classname='h-[1.2rem] w-[1.2rem]' />
          </button>
         
       </div>
      </div>
    </nav>
  )
}

export default MainNavbar