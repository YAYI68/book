"use client"
import { useClickAway } from '@/hooks'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'

type Props = {
    className?:string
    value?:string
    setDropDown?:Dispatch<SetStateAction<boolean | null>>;
    options?:string[]
    onSelect:Dispatch<SetStateAction<string | null>>
    
}

const DropDown = (props: Props) => {
    const { className,setDropDown,options,onSelect,value } = props
    const DropDownRef = useRef<HTMLDivElement>(null)
    useClickAway(DropDownRef,()=>setDropDown(false))
  return (
    <div ref={DropDownRef} className={` ${className} flex flex-col rounded-md bg-white  dark:bg-slate-800 p-2`}>
     {options.map((option,i)=>(
       <button  key={i} onClick={()=>onSelect(option)}  className={` ${value===option?"bg-red-300 text-white":""}  w-full p-2 flex items-center rounded-md  gap-2 hover:bg-slate-500 `}>
          <span>{option}</span>
       </button>
     ))} 
   </div>
  )
}

export default DropDown