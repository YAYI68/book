import { type } from 'os'
import React from 'react'


type SubjectProps = {

}

const Subject = (props:SubjectProps)=>{

    return(
    <div className='h-[23rem] w-full md:w-[43%] lg:w-[23%]'>
       <div className='shadow-md w-full h-[85%] bg-red-500'>

       </div>
        <div className='px-1 py-2 w-full h-[15%]'>
         <p className='flex flex-col p-2 items-center text-center w-fit rounded-2xl dark:bg-gray-300 bg-gray-200 dark:text-gray-700'><span>Science</span></p>
        </div>
     </div>
    )
}

type BrowseSubjectProps = {}

const BrowseSubject = (props: BrowseSubjectProps) => {
  return (
    <div className='bg-white w-full flex flex-col items-center py-[3rem] dark:bg-black'>
    <div className='w-[90%] flex items-center md:items-start flex-col gap-4 '>
     <h3 className='font-semibold text-[1.5rem] dark:text-white'>BROWSE SUBJECTS</h3>
     <div className='w-full flex flex-col gap-4 items-center md:flex-row md:justify-between flex-wrap '>
      <Subject />
      <Subject />
      <Subject />
      <Subject />
     </div>
    </div>
   </div>
  )
}

export default BrowseSubject

