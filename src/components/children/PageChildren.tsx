import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import AppProvider from '@/context/AppProvider'

type Props = {
    children:ReactNode
}

const PageChildren = (props: Props) => {
    const { children } = props
    const pathname= usePathname()

    if (pathname === "/login" || pathname === "/sign-up"){
        return (
           <AppProvider>
            {children}
           </AppProvider>
          
        )
    }
  return (
   <AppProvider>
      <Header />
      {children}
    <Footer/>
   </AppProvider>
   
  )
}

export default PageChildren