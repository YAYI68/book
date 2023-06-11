import React from 'react'

type Props = {
    classname:string
}

const Times = (props: Props) => {
    const { classname } = props
  return (
    <svg fill="none" className={classname} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
  )
}

export default Times