import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Main = (props: Props) => {
    const { children } = props
  return (
    <main className="flex dark:bg-black min-h-screen flex-col items-center justify-between bg-white">
      {children}
    </main>
  )
}

export default Main