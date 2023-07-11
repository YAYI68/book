"use client"
import React, { useState } from 'react'
import TableHeader from './TableHeader'
import { CheckIcon } from '../svg'
import TableBody from './TableBody'

type Props = {}

const Table = (props: Props) => {
    const [select,setSelect] = useState([])
    const data = [1,2,3,4,5,6,7,8,9,10]

  return (
    <table className="w-full  dark:text-white text-sm overflow-x-scroll ">
    <TableHeader selectedValue={data} setSelectAllRow={setSelect} />
    {data.map((num,i)=>(
       <TableBody key={i} rowId={num} selectedNum={select} setSelect={setSelect} />
    ))}

</table>
  )
}

export default Table