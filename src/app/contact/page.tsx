import { Main } from '@/components/ui'
import { EmailIcon, LocationIcon, PhoneIcon } from '@/components/ui/svg'
import React, { ReactNode } from 'react'

type ContactProps = {
   icon:ReactNode
   name:string
   detail:string
}

const ContactLocation = (props:ContactProps)=>{
   const { icon, name, detail } = props

   return(
      <div className='w-full flex items-center gap-4'>
         <div>
            {icon}
         </div>
         <div className='flex flex-col gap-2'>
           <p className='font-semibold text-[1rem] dark:text-white'>{name}</p>
           <p className='text-xs text-gray-400'>{detail}</p>
          </div>
         </div>
   )

}

type Props = {}

const page = (props: Props) => {
  return (
     <Main>
        <section className='bg-white w-full flex flex-col items-center py-[4rem] dark:bg-black'>
            <div className='w-[90%] flex flex-col md:justify-between gap-4 items-center md:flex-row md:h-[60vh]'>
              <div id='info' className='w-full md:w-[50%] flex flex-col gap-4 '>
               <div className=''>
                <h3 className='text-[2rem] font-semibold dark:text-white'>Contact Information</h3>
                <p className='text-gray-600 dark:text-gray-300'>Send us an email, give us a call or make use of the live chat service on the bottom right corner of your screen</p>
               </div> 
               <div className=' w-full flex flex-col gap-4'>
                    <h4 className='text-[1.5rem] font-semibold dark:text-white'>Get in touch</h4>
                    <ContactLocation 
                      icon={<LocationIcon classname='text-red-500  h-8 w-8' />}
                      name='Address'
                      detail='No 7/9 Adebisi oyenola street,idada estate,igbon Efon,Lekki'
                    />
                     <ContactLocation 
                      icon={<EmailIcon classname='text-red-500  h-8 w-8' />}
                      name='Address'
                      detail='No 7/9 Adebisi oyenola street,idada estate,igbon Efon,Lekki'
                    />
                     <ContactLocation 
                      icon={<PhoneIcon classname='text-red-500  h-8 w-8' />}
                      name='Address'
                      detail='No 7/9 Adebisi oyenola street,idada estate,igbon Efon,Lekki'
                    />
               </div> 
              </div>  
              <div id='help' className='w-full mt-4 md:mt-0 md:w-[50%] flex flex-col items-center '>
                 <div className='w-full md:w-[90%]'>
                    <h3 className='dark:text-white text-[1.5rem] font-semibold'>How can we help?</h3>
                    <form className=''>
                      <div className='p-2 w-full flex flex-col md:flex-row md:justify-between'>
                        <div className='md:w-[48%] w-full'>
                           <label htmlFor="" className='dark:text-white block my-2'>First Name</label>
                           <input type="text" className='w-full p-2 dark:text-white outline-none dark:bg-gray-900 dark:border-b-gray-200 border-b-2' />
                        </div>
                        <div className='md:w-[48%] w-full'>
                           <label htmlFor="" className='dark:text-white block my-2'>Last Name</label>
                           <input type="text" className='w-full p-2 dark:text-white outline-none dark:bg-gray-900 dark:border-b-gray-200 border-b-2' />
                        </div>
                      </div>
                      <div className='p-2'>
                         <label htmlFor="" className='dark:text-white block my-2'>Email Address</label>
                         <input type="email" className='w-full p-2 dark:text-white outline-none dark:bg-gray-900 dark:border-b-gray-200 border-b-2' />
                      </div>
                      <div className='p-2'>
                         <label htmlFor="" className='dark:text-white block my-2'>Your Subject</label>
                         <input type="email" className='w-full p-2 dark:text-white outline-none dark:bg-gray-900 dark:border-b-gray-200 border-b-2' />
                      </div>
                      <div className='p-2'>
                         <label htmlFor="" className='dark:text-white block my-2'>Description</label>
                         <input type="email" className='w-full p-2 dark:text-white outline-none dark:bg-gray-900 dark:border-b-gray-200 border-b-2' />
                      </div>
                      <button className='p-2 mt-4 bg-red-500 text-white rounded text-center w-full'>Send Message</button>
                    </form>
                 </div>
              </div>
            </div>
        </section>
     </Main>
  )
}

export default page