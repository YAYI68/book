"use client"
import { convertToBase64 } from '@/utils'
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {
   
  const [ bookImage, setBookImage ] = useState("")

  
  const handlImageUpload =  async(e)=>{
    const image = e.target.files[0]
   const image_data = await convertToBase64(image)
   setBookImage(image_data)
   console.log({image_data})
  }

  console.log({bookImage})


  return (
    <div>
      <form className='mt-[12rem]'>
        <input type="file" onChange={handlImageUpload}  />
      </form>
    </div>
  )
}

export default Page

