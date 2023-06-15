
import { SubscriptionHeader, SubscriptionPlan } from '@/components/pricing'
import { Main } from '@/components/ui'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Main >
       <section className='w-full'>
        <div className=' w-full flex flex-col items-center py-[5rem] dark:bg-black'>
          <div className='w-[90%] flex items-center md:items-start flex-col gap-4 '>
             <div className='w-full flex flex-col items-center '>
               <SubscriptionHeader />
               <div className='w-full flex flex-col items-center md:flex-row py-[2rem] md:justify-center gap-4'>
                  <SubscriptionPlan
                    planBackground='bg-green-400'
                    planTitle='Basic'
                    planPrice='10,000'
                    step1='Read a max of 5 books a week'
                    step2='Download a max of 10 books'
                    step3='Not notified of new books '
                  />   
                <SubscriptionPlan
                    planBackground='bg-orange-400'
                    planTitle='Starter'
                    planPrice='30,000'
                    step1='Read a max of 15 books a week'
                    step2='Download a max of 20 books'
                    step3='Not notified of new books '
                  />
                <SubscriptionPlan
                    planBackground='bg-red-500'
                    planTitle='Basic'
                    planPrice='50,000'
                    step1='Read unlimited books a week'
                    step2='Download unlimited books'
                    step3='Get notified of new books '
                  />     
               </div>
             </div>
          </div>
        </div>
        </section> 
    </Main>
  )
}

export default page