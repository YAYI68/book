"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CheckIcon } from '../ui/svg'
import { EditDeleteDropDown } from '../ui'

type Props = {
    selectedNum?:number[]
    rowId?:number
    setSelect?:Dispatch<SetStateAction<number[] | null>>;
}

const BookTableBody = (props: Props) => {
    const {selectedNum,rowId,setSelect} = props
    const [ checked,setChecked] = useState(false)
    const [displayMenu, setDisplayMenu ]= useState(false)
     const currentChecked = selectedNum.includes(rowId)
    
     const handleChange = ()=>{
        setChecked(!checked)
        if(!checked){
            setSelect(prev=>[...prev,rowId])
        }
        else{
            setSelect(selectedNum.filter((currentNum)=>currentNum !==rowId))
        }
     }
    
  return (
    <tbody className="w-full">
    <tr className={`border-b border-b-black dark:border-b-gray-400 transition-colors hover:bg-muted/50 ${currentChecked ? "bg-red-200":""}`} data-state="false">
    <th className="h-10 px-2 text-left align-middle font-medium  ">
              <button onClick={handleChange} className= {` h-4 w-4  border-black dark:border-white ${currentChecked ?"dark:bg-white bg-black":""} shrink-0 rounded-sm border border-primary shadow flex flex-col items-center justify-center translate-y-[2px]`}>
              <CheckIcon classname={`h-[80%] w-[80%] dark:fill-black dark:text-black text-white fill-white ${currentChecked ?"opacity-1":"opacity-0" } text-[2rem] `} />              
              </button>
        </th>
        <td className="p-2 align-middle ">
            <div className="w-[80px]">TASK-8782</div>
        </td>
        <td className="p-2 align-middle ">
            <div className="flex space-x-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Documentation</div>
                <span className="max-w-[500px] truncate font-medium">You can &#x27;t compress the program without quantifying the open-source SSD pixel!</span>
            </div>
        </td>
        <td className="p-2 align-middle ">
            <div className="flex w-[100px] items-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 text-muted-foreground">
                    <path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
                <span>In Progress</span>
            </div>
        </td>
        <td className="p-2 align-middle ">
            <div className="flex w-[100px] items-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 text-muted-foreground">
                    <path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
                <span>In Progress</span>
            </div>
        </td>
      
        <td className="relative p-2 align-middle ">
            <button onClick={()=>setDisplayMenu(!displayMenu)} className="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted" type="button" id="radix-:R31l9mmkr9hja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                    <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
                <span className="sr-only">Open menu</span>
            </button>
            {displayMenu ?
            <EditDeleteDropDown setDropDown={setDisplayMenu} className='absolute top-[-100%] border left-[-70%] lg:left-[-70%] z-[2] w-[5.5rem]' />
             : ""  
            }
        </td>
    </tr>
</tbody>
  )
}

export default BookTableBody