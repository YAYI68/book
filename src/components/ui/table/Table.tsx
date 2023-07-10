import React from 'react'
import TableHeader from './TableHeader'
import { CheckIcon } from '../svg'
import TableBody from './TableBody'

type Props = {}

const Table = (props: Props) => {
    
  return (
    <table className="w-full dark:text-white text-sm overflow-auto">
    <TableHeader />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
    <TableBody />
</table>
  )
}

export default Table