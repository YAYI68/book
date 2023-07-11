import React from 'react'
import { UserDashboardTable } from '@/components/dashboard'

type Props = {}

const page = (props: Props) => {
  return (
   <section className='w-full h-full'>
       <UserDashboardTable />
    </section>
  )
}

export default page