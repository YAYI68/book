import Image from 'next/image'
import React from 'react'
import SigupImg from '/public/images/sign_up.webp'
import { SignUpForm } from '@/components/form'


type Props = {}

const page = (props: Props) => {
  return (
    <section className='w-full flex h-screen'>
      <div className='w-[50%] hidden lg:flex relative h-full '>
         <div className='absolute top-0 left-0 w-full h-ull bg-[rgba(0,0,0,.5)]'>
            <div className='w-full h-screen flex flex-col items-center justify-center text-white'>
               <div className='w-fit p-4 h-fit'>
                 <h3 className='text-[2.5rem] font-semibold'>Start your</h3>
                <h3 className='text-[2.5rem] font-semibold'>Reading Journey with us.</h3>
                <p className='text-[1.2rem] text-gray-300'>We are always here to serve you better.</p>
               </div>
            </div>
         </div>
         <Image src={SigupImg} alt='' />
      </div>
      <div className='w-full lg:w-[50%] h-full bg-white dark:bg-black flex flex-col justify-center items-center'>
         <SignUpForm />
      </div>
    </section>
  )
}

export default page