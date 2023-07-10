import { useClickAway } from '@/hooks'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'

type Props = {
    className?:string
    defaultValue?:string
    setDropDown?:Dispatch<SetStateAction<boolean | null>>;
}

const DropDown = (props: Props) => {
    const { className,setDropDown } = props
    const [value,setValue] = useState("")
    const DropDownRef = useRef<HTMLDivElement>(null)
    useClickAway(DropDownRef,()=>setDropDown(false))
  return (
    <div ref={DropDownRef} className={` ${className} flex flex-col rounded-md bg-white  dark:bg-slate-800 p-2`}>
    <button onClick={()=>setValue('')}  className={`  ${value==="dark"?'text-red-600':''} w-full p-2 flex items-center rounded-md  gap-2 hover:bg-slate-500 `}>
      <span>Dark</span>
    </button>
    <button onClick={()=>setValue('')}  className={`  ${value==="dark"?'text-red-600':''} w-full p-2 flex items-center rounded-md  gap-2 hover:bg-slate-500 `}>
      <span>Dark</span>
    </button>
    <button onClick={()=>setValue('')}  className={`  ${value==="dark"?'text-red-600':''} w-full p-2 flex items-center rounded-md  gap-2 hover:bg-slate-500 `}>
      <span>Dark</span>
    </button>
    <button onClick={()=>setValue('')}  className={`  ${value==="dark"?'text-red-600':''} w-full p-2 flex items-center rounded-md gap-2 hover:bg-slate-500 `}>
      <span>Dark</span>
    </button>
   </div>
  )
}

export default DropDown