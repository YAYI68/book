import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-4 items-center lg:items-start lg:flex-row'>
      <div className='w-[14rem] h-[14rem] lg:w-[25%] lg:justify-between lg:h-[18rem] rounded-[50%] bg-green-500'>

      </div>
      <div className='flex w-full  flex-col lg:w-[70%]'>
        <h3 className='text-[1.5rem] lg:text-[2rem] text-center lg:text-start font-semibold dark:text-white'>Personal Information</h3>
        <div className='w-full py-2 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between'>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>First Name</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>ANGELA</p>
            </div>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>Last Name</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>ITOHAN</p>
            </div>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>Email</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>youremail@email.com</p>
            </div>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>Phone Number</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>+1234567890</p>
            </div>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>Username</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>Angel123</p>
            </div>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>Subscription Plan</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>Starter</p>
            </div>
            <div className='flex flex-col w-full lg:w-[47%]'>
              <p className='dark:text-gray-300 p-2'>Join Date</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>05/05/2020</p>
            </div>
            <div className='flex flex-col w-full lg:w-[20%]'>
              <p className='dark:text-gray-300 p-2'>Last active</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>10 mins ago</p>
            </div>
            <div className='flex flex-col w-full lg:w-[20%]'>
              <p className='dark:text-gray-300 p-2'>Gender</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>FEMALE</p>
            </div>
            <div className='flex flex-col w-full '>
              <p className='dark:text-gray-300 p-2'>About</p>
              <p className='p-2 w-full rounded border border-gray-400 dark:text-gray-300'>
                A Story teller that loves to engage in reading and also writing, I am happy that study is allowing
                me achieve this seemlessly without any hurdle
              </p>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Profile