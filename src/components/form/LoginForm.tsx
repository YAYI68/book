"use client"
import { pacifico } from '@/utils/font'
import Link from 'next/link'
import {useState} from 'react'
import { signIn, useSession } from "next-auth/react";

type Props = {}

const LoginForm = (props: Props) => {

  const [email,setEmail]=useState<string|null>('')
  const [password,setPassword]=useState<string|null>('')

 
  
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    await  signIn('credentials',{
      email,
      password,
    })
  }

  return (
    <div className='w-[80%]  lg:w-[60%] lg:flex h-[90%] lg:h-[80%] flex flex-col items-center p-4 '>
    <h3 className={`text-[3rem] font-semibold dark:text-white  text-center ${pacifico.className}`}>Studee</h3>
    <p className='dark:text-gray-300 text-[1.2rem]'>login into your account</p>
    <form action="" className='mt-[2rem] w-full flex flex-col gap-4'>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded ' />
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded ' />
      <div className='w-fit flex items-center gap-2'>
        <input type="checkbox" name="" id="show_password" />
        <label htmlFor="show_password" className='dark:text-gray-300'>Show password</label>
      </div>
      <button className='w-full text-center bg-red-500 text-white p-2 rounded-md font-medium' onClick={(e)=>handleSubmit(e)} >Login</button>
    </form>
    <div className='flex w-fit self-end mt-[1rem] lg:mt-[1.5rem] gap-1'>
      <p className='dark:text-white'>Don&#39;t have an account?</p> 
      <Link href={'/sign-up'} className='text-red-500' >signup</Link>
    </div>
  </div>
  )
}

export default LoginForm