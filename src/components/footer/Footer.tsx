import { pacifico } from '@/utils/font'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '../ui/svg/FacebookIcon'
import InstagramIcon from '../ui/svg/InstagramIcon'
import LinkedIcon from '../ui/svg/LinkedIcon'
import TwitterIcon from '../ui/svg/TwitterIcon'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-gray-300 dark:bg-gray-900 w-full flex flex-col items-center py-[4rem]'>
      <div className='w-[90%]'>
        <div className='w-full flex flex-col md:flex-row gap-4 md:justify-between '>
           <div className='pb-4 flex flex-col gap-8 w-full md:w-[43%] flex-wrap lg:w-[23%]'>
           <Link href="/" className={`${pacifico.className} block text-[2rem] font-medium dark:text-white`}>Studee</Link>
            <p className=' text-[1.2rem] font-medium dark:text-white'>sign in to get access to all our books and get notifications when we post and upload new books are released.</p>
           </div>
           <div className='pb-4 flex flex-col gap-4  md:gap-8 w-full md:w-[43%] flex-wrap lg:w-[23%]'>
             <p className='block text-[2rem] dark:text-white font-medium'>Library</p>
             <Link href={''} className='text-gray-500 dark:text-gray-400 hover:text-black  rounded hover:dark:text-white text-[1.2rem]' >Genres</Link>
             <Link href={''} className='text-gray-500 dark:text-gray-400 hover:text-black  rounded hover:dark:text-white text-[1.2rem]'>Language</Link>
             <Link href={''} className='text-gray-500 dark:text-gray-400 hover:text-black  rounded hover:dark:text-white text-[1.2rem]'>Author</Link>
           </div>
           <div className='pb-4 flex flex-col gap-4  md:gap-8 w-full md:w-[43%] flex-wrap lg:w-[23%]'>
             <p className=' text-[2rem] dark:text-white font-medium'>Contact Us</p>
             <p className='text-gray-500 dark:text-gray-400 hover:text-black  rounded hover:dark:text-white text-[1.2rem]' >+1234567890</p>
             <Link href={''} className='text-gray-500 dark:text-gray-400 hover:text-black  rounded hover:dark:text-white text-[1.2rem]'>Studee@test.com.ng</Link>
             <p className='text-gray-500 dark:text-gray-400 hover:text-black  rounded hover:dark:text-white text-[1.2rem]'>12 akoka, university road,yaba lagos.</p>
             <div className='w-full flex items-center gap-4'>
                <button className='flex flex-col items-center justify-center '>
                    <FacebookIcon classname='h-[1.5rem]  w-[1.5rem] fill-red-500 text-red-500' />
                </button>
                <button className='flex flex-col items-center justify-center '>
                    <InstagramIcon classname='h-[1.5rem]  w-[1.5rem] fill-red-500 text-red-500' />
                </button>
                <button className='flex flex-col items-center justify-center '>
                    <LinkedIcon classname='h-[1.5rem]  w-[1.5rem] fill-red-500 text-red-500' />
                </button>
                <button className='flex flex-col items-center justify-center '>
                    <TwitterIcon classname='h-[1.5rem]  w-[1.5rem] fill-red-500 text-red-500' />
                </button>
             </div>
           </div>
           <div className=' w-full flex flex-col gap-2 md:w-[43%] flex-wrap lg:w-[23%]'>
           <p className=' text-[2rem] dark:text-white font-medium'>Subscribe to</p>
           <p className={`${pacifico.className} text-[1.5rem] dark:text-white`}>Studee <span>via Email</span></p>
           <p className='dark:text-white'>Be the first to get information on our latest books and publications and any ongoing projects</p>
           <form action="" className='w-full flex flex-col gap-2 md:gap-4'>
            <input type="email" placeholder='Your email' className='w-full p-2 border border-black outline-none' />
            <button type="submit" className='bg-red-500 text-white py-2 px-4 text-center w-fit '>Subscribe</button>
           </form>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer