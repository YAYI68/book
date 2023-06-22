import SideNavbar from '@/components/header/SideNavbar'
import Profile from '@/components/profile/Profile'
import { Main } from '@/components/ui'
import React from 'react'

type Props = {

}

const page = (props: Props) => {
  return (
    <Main>
        <section className=' w-full  lg:pt-[3rem] pb-[2rem]'>
           <div className='w-full h-full  flex flex-col items-center'>
               <SideNavbar />
               <div className='w-[90%] flex flex-col items-end '>
                 <aside className='w-full lg:w-[90%] rounded bg-gray-200 dark:bg-gray-800 p-4'>
                    <Profile />
                  </aside>
               </div>
           </div>
        </section>
    </Main>
  )
}

export default page