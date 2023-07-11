

import React from 'react'
import { BookDashboardTable } from '@/components/dashboard'

type Props = {}

const Page = (props: Props) => {
 
  return (
    <section className='w-full h-full'>
       <BookDashboardTable />
    </section>
  )
}

export default Page