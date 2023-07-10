import Link from 'next/link'
import React from 'react'
import { EditIcon, KeyIcon, UserIcon, WalletIcon } from '../ui/svg'

type Props = {}

const DashboardSideNav = (props: Props) => {
    return (
        <nav className='w lg:w-[12%] py-[1.5rem] px-2 rounded-md dark:bg-gray-900 fixed z-[3] left-0 bg-gray-200'>
          <ul className='flex flex-col'>
            <li><Link href={'/dashboard'} className='p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between'> <span className='w-[20%] text-center'> <UserIcon classname="h-6 w-6 text-red-500" /> </span> <span className='hidden w-[80%] lg:block text-[.9rem]'>overview</span></Link></li>
            <li><Link href={'/dashboard/users'} className='p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between'> <span className='w-[20%] text-center'> <EditIcon classname="h-6 w-6 text-red-500" /> </span> <span className='hidden w-[80%] text-[.9rem] lg:block'>users</span></Link></li>
            <li><Link href={'/dashboard/books'} className='p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between'> <span className='w-[20%] text-center'> <KeyIcon classname="h-6 w-6 text-red-500" /> </span> <span className='hidden w-[80%] text-[.9rem] lg:block'>books</span></Link></li>
            <li><Link href={'/dashboard/subscription'} className='p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between'> <span className='w-[20%] text-center'> <WalletIcon classname="h-6 w-6 text-red-500" /> </span> <span className='hidden w-[80%] text-[.9rem] lg:block'>subscription</span></Link></li>
          </ul>
        </nav>
     )
   
}

export default DashboardSideNav