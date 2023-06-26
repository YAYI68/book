import React from 'react'

type Props = {
    classname:string
}

const ArrowRight = (props: Props) => {
    const { classname } = props
  return (
    <svg className={classname} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
  )
}

export default ArrowRight