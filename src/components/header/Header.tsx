import React from 'react'
import MainNavbar from './MainNavbar'
import MobileNavbar from './MobileNavbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='h-[4rem] dark:bg-black bg-white fixed w-full'>
        <MainNavbar />
        <MobileNavbar />
    </header>
  )
}

export default Header