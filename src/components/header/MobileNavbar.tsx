"use client"
import Link from 'next/link'
import React, { useState, Dispatch, MouseEventHandler, SetStateAction, useRef } from 'react'
import { pacifico } from '../../utils/font';
import { BarIcon, DarkIcon } from '../ui/svg';
import { Theme } from '../ui';
import { useClickAway } from '@/hooks';



type Props = {}

const MobileNavbar = (props: Props) => {
   const [currentTheme, setCurrentTheme ] = useState<string>('light')
   const [displayTheme,setDisplayTheme ] = useState<boolean>(false)
     
  return (
    <nav className='h-full w-full lg:hidden bg-white dark:bg-black dark:text-white  flex px-4 py-2 justify-between items-center'>
     <Link href="/" className={`${pacifico.className} block text-[2rem]`}>Studee</Link>
      <div className='flex relative gap-4'>
        <button onClick={()=>setDisplayTheme(!displayTheme)} className='flex  items-center justify-center h-[3rem] w-[3rem] rounded-[50%] hover:bg-slate-500 border-2'>
          <DarkIcon classname='h-[1.5rem] w-[1.5rem]' />  
        </button>
        {displayTheme?
        <Theme 
        setDisplayTheme={setDisplayTheme} 
        setCurrentTheme={setCurrentTheme} 
        classname='w-[7rem] absolute border-2 top-[120%] ' 
        currentTheme={currentTheme}   /> 
        :""
        }
        <button className='flex items-center justify-center h-[3rem] w-[3rem] rounded-[50%] hover:bg-slate-500 border-2'>
           <BarIcon classname='h-[2rem] w-[2rem]' />
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar