import React from 'react'

type Props = {
    classname:string
}

const FacebookIcon = (props: Props) => {
    const { classname } = props
  return (
    <svg fill="none" className={classname} stroke="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path>
    </svg>
  )
}

export default FacebookIcon