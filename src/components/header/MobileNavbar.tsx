"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { pacifico } from '../../utils/font';
import { BarIcon, DarkIcon, LightIcon, SearchIcon, SystemIcon, Times } from '../ui/svg';
import { Theme } from '../ui';
import { useAppContext} from '@/context/AppProvider';
import SearchInput from '../ui/SearchInput';





type Props = {}

const MobileNavbar = (props: Props) => {
   const {activeTheme,setActiveTheme} = useAppContext()
   const [displayTheme,setDisplayTheme ] = useState<boolean | null>(false)
   const [ displaySearchInput, setDisplaySearchInput] = useState<boolean | null>(false)
   const [ slideIn, setSlideIn ] = useState(false)

   const popOutsearch = ()=>{
     setSlideIn(false)
     setDisplaySearchInput(true)
   }
     
  return (
    <nav className='h-full w-full relative lg:hidden bg-white dark:bg-black dark:text-white  flex px-4 py-2 justify-between items-center'>
     <Link href="/" className={`${pacifico.className} block text-[2rem]`}>Studee</Link>
      <div className='flex relative gap-4'>
        <button onClick={()=>setDisplayTheme(!displayTheme)} className='flex  items-center justify-center h-[3rem] w-[3rem] rounded-[50%] hover:bg-slate-500 border-2'>
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
        classname='w-[7rem] absolute border-2 top-[120%] z-[2]' 
        activeTheme={activeTheme}   /> 
        :""
        }
        <button onClick={()=>setSlideIn(!slideIn)} className='flex items-center justify-center h-[3rem] w-[3rem] rounded-[50%] hover:bg-slate-500 border-2'>
          {slideIn?<Times classname='h-[2rem] w-[2rem]'/>:<BarIcon classname='h-[2rem] w-[2rem]' />}
        </button>
        {/* <button className='flex items-center justify-center h-[3rem] w-[3rem] rounded-[50%] hover:bg-slate-500 border-2'>
           <BarIcon classname='h-[2rem] w-[2rem]' />
        </button> */}
      </div>     
       <div className={`${slideIn?"translate-x-0":"translate-x-full"} transition-[transform] w-full top-[100%] left-0 absolute h-[50vh] backdrop-blur-md dark:bg-black `}>
        <ul className='w-full px-4 py-2 '>
         <li onClick={()=>setSlideIn(false)} className='w-full p-2 group border-b-2'><Link href={''} className='block group-hover:translate-x-2 transition-[transform]'>Books</Link></li>
         <li onClick={()=>setSlideIn(false)} className='w-full p-2 group border-b-2'><Link href={''} className='block group-hover:translate-x-2 transition-[transform]'>Genre</Link></li>
         <li onClick={()=>popOutsearch()} className='w-full p-2  group border-b-2'><p className='flex items-center gap-2 group-hover:translate-x-2 transition-[transform]'><span>Search</span><span><SearchIcon classname='h-[1.3rem] w-[1.3rem]' /></span></p>  </li>
         <li onClick={()=>setSlideIn(false)} className='w-full p-2 group border-b-2'><Link href={''} className='block group-hover:translate-x-2 transition-[transform]'>Login</Link></li>
         <li onClick={()=>setSlideIn(false)} className='w-full p-2 group border-b-2'><Link href={''} className='block group-hover:translate-x-2 transition-[transform]'>Signup</Link></li>
         <li onClick={()=>setSlideIn(false)} className='w-full p-2 group border-b-2'><Link href={''} className='block group-hover:translate-x-2 transition-[transform]'>My Learning</Link></li>
        </ul>
       </div> 
       {displaySearchInput ? 
         <SearchInput setDisplaySearchInput={setDisplaySearchInput} className='absolute z-[3] top-full left-0' />
         : "" 
        }
      
    </nav>
  )
}

export default MobileNavbar