import React from 'react'

type Props = {
    className?:string
}

const ChevronRightIcon = (props: Props) => {
    const {className } = props
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default ChevronRightIcon