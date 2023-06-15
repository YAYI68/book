import React from 'react'

type Props = {}

const SubscriptionHeader = (props: Props) => {
  return (
    <div className='w-fit flex flex-col items-center text-center'>
        <h2 className='text-[2rem] w-fit text-center gap-4 font-semibold flex  items-center'> <span className='text-red-500'>Flexible</span> <span className='dark:text-white '>Plans</span></h2>
        <p className='dark:text-gray-200  text-gray-800 text-[1.2rem] font-semibold'>Choose a plan that works best for you and your team.</p>
    </div>
  )
}

export default SubscriptionHeader