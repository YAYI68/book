import React from 'react'
import MainNavbar from './MainNavbar'
import MobileNavbar from './MobileNavbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='h-[4rem] z-[5] fixed dark:bg-black bg-white  w-full'>
        <MainNavbar />
        <MobileNavbar />
    </header>
  )
}

export default Header