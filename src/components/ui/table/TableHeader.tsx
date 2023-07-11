"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { CheckIcon } from '../svg'
import DropDown from '../DropDown'






type TableHeaderProps = {
    setSelectAllRow?:Dispatch<SetStateAction<number[] | null>>;
    selectedValue?:number[]
}

const TableHeader = (props: TableHeaderProps) => {
    const {setSelectAllRow,selectedValue} = props
    const [checkedAll,setCheckedAll] = useState(false)
    const [genreDropDown,setGenreDropDown] = useState(false)
    const [genre,setGenre] =useState('')

    const genreStatus = ["Art","Science","Comic","History","Government"]
  
    const handleCheckedAll = ()=>{
        setCheckedAll(!checkedAll)
        if(!checkedAll){
            setSelectAllRow(selectedValue)  
        }
        else{
            setSelectAllRow([])
        }    
    }

  return (
    <thead className="">
    <tr className="border-b  border-b-black transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <th className="h-10 px-2 text-left align-middle font-medium  ">
              <button onClick={handleCheckedAll} className= {` h-4 w-4  border-black dark:border-white ${checkedAll?"dark:bg-white bg-black":""} shrink-0 rounded-sm border border-primary shadow flex flex-col items-center justify-center translate-y-[2px]`}>
              <CheckIcon classname={`h-[80%] w-[80%] dark:fill-black dark:text-black text-white fill-white ${checkedAll?"opacity-1":"opacity-0" } text-[2rem] `} />              
              </button>
        </th>
        <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground ">
            <p className="">Author</p>
        </th>
        <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground ">
            <p className="">Title</p>
        </th>
        <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground ">
            <div className="flex items-center space-x-2 relative">
                <button onClick={()=>setGenreDropDown(!genreDropDown)} className="inline-flex items-center text-[1.5rem] justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs -ml-3 h-8 data-[state=open]:bg-accent" type="button" id="radix-:R9d9mmkr9hja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                    <span>Genre</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4">
                        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </button>
                {genreDropDown?
                <DropDown value={genre} onSelect={setGenre} options={genreStatus} setDropDown={setGenreDropDown} className='absolute top-[100%] w-full border left-0' />:
                ''
                }
            </div>
        </th>
        <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
            <p className="">Published Date</p>
        </th>
        <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground "></th>
    </tr>
</thead>
  )
}

export default TableHeader

