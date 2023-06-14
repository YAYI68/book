"use client"

import React, { Dispatch, SetStateAction, useRef } from 'react'
import { SearchIcon } from './svg'
import { useClickAway } from '@/hooks'

type Props = {
    className:string
    setDisplaySearchInput:Dispatch<SetStateAction<boolean | null>>
}

const SearchInput = (props: Props) => {
     const { className, setDisplaySearchInput } = props
    const SearchRef = useRef<HTMLDivElement>(null)
   useClickAway(SearchRef,()=>setDisplaySearchInput(false))
  return (
    <div ref={SearchRef} className={` ${className}  px-4 flex flex-col items-center w-full `}>
    <form className='w-full   mt-4 lg:w-[70%] flex items-center  border-2 bg-white dark:bg-slate-800 p-2 rounded-md'>
     <input type="search" className='flex-[9] outline-none bg-white dark:bg-slate-800' />
     <button className='flex-[1] flex items-center justify-center'><SearchIcon classname='h-6 w-6 text-black dark:text-white'/></button>
    </form>
    </div>
  )
}

export default SearchInput