"use client"
import React, { Dispatch, MouseEventHandler, SetStateAction, useRef } from 'react'
import { DarkIcon, LightIcon } from './svg'
import SystemIcon from './svg/SystemIcon';
import { useClickAway } from '@/hooks';

 interface Props {
    classname?:string;
    currentTheme?:string;
    setDisplayTheme:Dispatch<SetStateAction<boolean>>;
    setCurrentTheme:Dispatch<SetStateAction<string>>
}


const Theme = (props:Props) => {
  const { classname , currentTheme,setCurrentTheme,setDisplayTheme} = props
  const ThemeRef = useRef<HTMLDivElement>(null)
   useClickAway(ThemeRef,()=>setDisplayTheme(false))


   
    const onChangeTheme = (text:string)=>{
      setDisplayTheme(false)
      setCurrentTheme(text)
    }
   

  return (
    <div ref={ThemeRef} className={` ${classname} w-full flex flex-col rounded-md bg-white  dark:bg-slate-800 py-2`}>
    <button onClick={()=>onChangeTheme('dark')}  className={`  ${currentTheme==="dark"?'text-red-600':''} w-full p-2 flex items-center  gap-2 hover:bg-slate-500 `}>
     <span><DarkIcon classname='h-[1rem] w-[1rem]' /></span><span>Dark</span>
    </button>
    <button onClick={()=>onChangeTheme('light')} className={`  ${currentTheme==="light"?'text-red-600':''} w-full p-2 flex items-center gap-2 hover:bg-slate-500 `}>
     <span><LightIcon classname='h-[1rem] w-[1rem]' /></span><span>Light</span>
    </button>
    <button  onClick={()=>onChangeTheme('system')} className={` ${currentTheme==="system"?'text-red-600':''} w-full p-2 flex items-center  gap-2 hover:bg-slate-500 `}>
     <span><SystemIcon classname='h-[1rem] w-[1rem]' /></span><span>System</span>
    </button>
 </div>
  )
}

export default Theme