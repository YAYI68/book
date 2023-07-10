import React, { useState } from 'react'

type Props = {
    className?:string
    defaultValue?:string
}

const DropDown = (props: Props) => {
    const { className } = props
    const [value,setValue] = useState("")
  return (
    <div  className={` ${className} flex flex-col rounded-md bg-white  dark:bg-slate-800 py-2`}>
    <button onClick={()=>setValue('')}  className={`  ${value==="dark"?'text-red-600':''} w-full p-2 flex items-center  gap-2 hover:bg-slate-500 `}>
      <span>Dark</span>
    </button>
   </div>
  )
}

export default DropDown