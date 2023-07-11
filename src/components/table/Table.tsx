"use client"
import React, { ReactNode, useState } from 'react'


type Props = {
  children:ReactNode
}

const Table = (props: Props) => {
  const { children } = props
  

  return (
    <table className="w-full  dark:text-white text-sm overflow-x-scroll ">
    {children}
    </table>
  )
}

export default Table