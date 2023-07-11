import { useClickAway } from '@/hooks';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { EditIcon, TrashIcon } from './svg';

type Props = {
    className?:string
    setDropDown?:Dispatch<SetStateAction<boolean | null>>;
    editHandle?:()=>{};
    deleteHandle?:()=>{}
}

const EditDeleteDropDown = (props: Props) => {
    const { className,setDropDown,editHandle,deleteHandle } = props
    const [value,setValue] = useState("")
    const DropDownRef = useRef<HTMLDivElement>(null)
    useClickAway(DropDownRef,()=>setDropDown(false))
  return (
    <div ref={DropDownRef} className={` ${className} flex flex-col rounded-md bg-white  dark:bg-slate-800 p-2`}>
    <button onClick={editHandle}  className={`  text-green-500 w-full p-2 flex items-center rounded-md  gap-1 hover:bg-slate-500 `}>
      <span> <EditIcon classname='text-green-500 h-3 w-3' /> </span> <span>edit</span>
    </button>
    <button onClick={deleteHandle}  className={` text-red-500 w-full p-2 flex items-center rounded-md   gap-1 hover:bg-slate-500 `}>
     <span><TrashIcon className='text-red-500 h-3 w-3' /></span> <span>Delete</span>
    </button>
   </div>
  )
}

export default EditDeleteDropDown