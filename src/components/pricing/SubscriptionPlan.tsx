import React from 'react'
import { ArrowRight, CheckIcon } from '../ui/svg'


type Props = {
  planBackground:string
  planTitle:string
  planPrice:string
  step1:string
  step2:string
  step3:string
}

const SubscriptionPlan = (props: Props) => {
  const {  planBackground,planTitle,planPrice,step1,step2,step3 } = props
  return (
    <div className=' rounded-md shadow-md p-[1rem] md:p-[2rem] w-[90%] md:w-[50%] lg:w-[30%] bg-white dark:border dark:bg-gray-900 my-[1rem]'>
       <div className=''>
           <div className='w-full flex items-center border-b-2 pb-4'>
             <div className={`relative h-[4rem] overflow-hidden w-[4rem] rounded ${planBackground}`}>
                 <span className='absolute top-[5%] h-[2.5rem] w-[2.5rem] right-[-10%] rounded-[50%] bg-[rgba(0_0_0)] opacity-[.05] '></span>
                 <span className='absolute bottom-[2%] h-[2.5rem] w-[2.5rem] right-[-5%] rounded-[50%] bg-[rgba(0_0_0)] opacity-5 '></span>
             </div>
             <div className='px-4 py-2'>
               <p className='font-semibold dark:text-white'>{planTitle}</p>
               <p className='text-[1.2rem] font-semibold dark:text-white'><span>NGN {planPrice}</span><span className='text-xs text-gray-400'>/month</span></p>
             </div>
           </div>
       </div>
       <div className='w-full'>
        <p className='flex py-2 md:py-4  items-center gap-4'><span><CheckIcon classname='text-black dark:text-gray-200 h-[1.5rem] w-[1.5rem] fill-gray-800 dark:fill-gray-300' /></span> <span className='dark:text-gray-300'>{step1}</span></p>
        <p className='flex py-2 md:py-4  items-center gap-4'><span><CheckIcon classname='text-black dark:text-gray-200 h-[1.5rem] w-[1.5rem] fill-gray-800 dark:fill-gray-300'/></span> <span className='dark:text-gray-300'>{step2}</span></p>
        <p className='flex py-2 md:py-4 items-center gap-4'><span><CheckIcon classname='text-black dark:text-gray-200 h-[1.5rem] w-[1.5rem] fill-gray-800 dark:fill-gray-300' /></span> <span className='dark:text-gray-300'>{step3}</span></p>    
       </div>
       <button className='text-white bg-red-500 rounded p-2 w-full flex items-center justify-center gap-2 '> <span>Choose Plan</span> <ArrowRight classname='h-[1.5rem] w-[1.5rem] ' /> <span></span></button>
    </div>
  )
}

export default SubscriptionPlan