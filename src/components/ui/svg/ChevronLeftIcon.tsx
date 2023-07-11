import React from 'react'

type Props = {
    className?:string
}

const ChevronLeftIcon = (props: Props) => {
    const { className } = props
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  )
}

export default ChevronLeftIcon