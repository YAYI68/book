"use client"
import { pacifico } from '@/utils/font'
import Link from 'next/link'
import React, { useState } from 'react'
import { DarkIcon, LightIcon, SearchIcon, SystemIcon } from '../ui/svg'
import { Theme } from '../ui'
import { useAppContext } from '@/context/AppProvider'
import SearchInput from '../ui/SearchInput'
import { signIn,signOut, useSession } from "next-auth/react";

type Props = {}

const MainNavbar = (props: Props) => {
  const {data:user,status} = useSession() 
  console.log({user})
  const {activeTheme,setActiveTheme} = useAppContext()
  const [displayTheme,setDisplayTheme ] = useState<boolean | null>(false)
  const [ displaySearchInput, setDisplaySearchInput] = useState<boolean | null>(false)
  return (
    <nav className='hidden h-full w-full lg:flex lg:flex-col lg:items-center  bg-white dark:bg-black dark:text-white border-b-2 dark:border-b-gray-500'>
      <div className='w-[90%]  px-2 h-full flex justify-between items-center'>
       <Link href="/" className={`${pacifico.className} block text-[2rem]`}>Studee</Link>
       <div className='flex relative items-center justify-between w-[80%] xl:w-[60%]'>
         <ul className='flex items-center w-[65%]  gap-4'>
          <li className='p-2 cursor-pointer font-medium text-gray-500  w-fit dark:text-gray-400 hover:text-black text-center rounded hover:dark:text-white'><Link href={'/books'} className='w-full'>Books</Link></li>
          <li className='p-2 cursor-pointer font-medium text-gray-500 w-fit text-center dark:text-gray-400 hover:text-black rounded hover:dark:text-white'><Link href={'/my-library'} className='w-full'>my library</Link></li>
          <li className='p-2 cursor-pointer font-medium text-gray-500 w-fit text-center dark:text-gray-400 hover:text-black rounded hover:dark:text-white'><Link href={'/pricing'} className='w-full'>pricing</Link></li>
          <li className='p-2 cursor-pointer font-medium text-gray-500 w-fit text-center dark:text-gray-400 hover:text-black rounded hover:dark:text-white'><Link href={'/contact'} className='w-full'>contact</Link></li>
          <li onClick={()=>setDisplaySearchInput(true)} className='w-fit p-2 cursor-pointer text-center font-medium text-gray-500  hover:text-black dark:text-gray-400 rounded hover:dark:text-white'><p className='flex items-center gap-2 '><span>Search</span><span><SearchIcon classname='h-[1.3rem] w-[1.3rem]' /></span></p>  </li>         
         </ul>
         {displaySearchInput ? 
         <SearchInput setDisplaySearchInput={setDisplaySearchInput} className='w-full absolute z-[3] top-full left-0' />
         : "" 
         }
          {/* UnAuthenticated */}
           <ul className='flex font-medium items-center gap-4'>
            {!user?
             <>
             <li className='py-2 px-4 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-black rounded hover:dark:text-white border dark:border-gray-500 hover:dark:border-white hover:border-black'><button className='w-full'  onClick={()=>signIn()}>Login</button></li>
             <li className='py-2 px-4 cursor-pointer text-gray-500 dark:text-black  rounded bg-black hover:text-white dark:bg-white hover:dark:bg-black hover:dark:text-white border hover:dark:border-white hover:border-black'><Link href={'/sign-up'}>Signup</Link></li> 
             </>
             : 
             <li className='py-2 px-4 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-black rounded hover:dark:text-white border dark:border-gray-500 hover:dark:border-white hover:border-black'><button className='w-full'  onClick={()=>signOut()}>LogOut</button></li>
          }
            
           </ul>
            {/* <div className='h-[2.5rem] w-[2.5rem] rounded-[50%] bg-yellow-400'>

            </div> */}
          <button onClick={()=>setDisplayTheme(!displayTheme)} className='p-2 h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-[50%] border'>
          {activeTheme === "dark"?
             <DarkIcon classname='h-[1.2rem] w-[1.2rem]' />:  
            activeTheme === "light" ?
            <LightIcon  classname='h-[1.2rem] w-[1.2rem]' />:
            activeTheme === "system"?
            <SystemIcon classname='h-[1.2rem] w-[1.2rem]' /> :
            ""
        } 
          </button>
          {displayTheme?
          <Theme 
           setDisplayTheme={setDisplayTheme} 
           setActiveTheme={setActiveTheme}
           classname=' w-[10rem] absolute border-2 top-[120%] z-[2] right-0' 
           activeTheme={activeTheme}   /> 
          :""
          }
          
       </div>
      </div>
    </nav>
  )
}

export default MainNavbar