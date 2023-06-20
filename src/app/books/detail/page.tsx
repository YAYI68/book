import { Main } from '@/components/ui'
import React from 'react'

type InfoTabProps = {
   category:string
   name:string
}

const InfoTab = (props:InfoTabProps)=>{
    return(
    <div className='w-[30%] md:w-[15%] text-center flex flex-col gap-2 py-2 border-r-2'>
        <p className='text-gray-600 dark:text-gray-500'>GENRE</p>
        <p className='dark:text-white'>SCIENCE</p>
    </div>
    )
    
}


type Props = {}

const page = (props: Props) => {
  return (
    <Main >
        <section className='bg-white w-full flex flex-col items-center py-[3rem] dark:bg-black '>
            <div className='w-[90%] flex flex-col md:justify-between gap-4 items-center md:flex-row md:h-[70vh] '>
               <div className='w-[70%] h-[40vh] md:h-full md:w-[25%] bg-emerald-500'>

               </div>
               <div className='md:w-[70%] p-2 md:h-full flex flex-col  w-full h-[20rem]'>
                 <div className='w-full pb-4 border-b-2'>
                   <h3 className='text-[1.5rem] dark:text-white'>The Psychology of Man</h3>
                   <p className='text-gray-600 dark:text-gray-300'>by Longman Rich</p>
                </div>
                <div className='py-4'>
                   <h4 className='font-semibold my-2 text-[1.2rem] dark:text-white'>About the Book</h4>
                   <p className='text-gray-600 dark:text-gray-300'>Get all the academic knowledge you ever need by subscribing and reading our books online at a lower cost. </p>
                </div>
                <div className='w-[30rem] h-[5rem] bg-red-400'>

                </div>

                <div className='w-full flex flex-row flex-wrap my-2 gap-4 md:gap-0'>
                  <InfoTab 
                    category='GENERE'
                    name='SCIENCE'
                    />

                    <InfoTab 
                    category='PUBLISHED'
                    name='1823'
                    />

                    <InfoTab 
                    category='BOOK AUTHOR'
                    name='Longman Rich'
                    />

                    <InfoTab 
                    category='LENGTH'
                    name='420 pages'
                    />

                    <InfoTab 
                    category='EDITION'
                    name='7TH Edition'
                    />

<InfoTab 
                    category='Appprox TIME'
                    name='3hrs40mins'
                    />

                </div>
               </div>
            </div>
        </section>
    </Main>
  )
}

export default page