import BookCategoryList from '@/components/common/BookCategoryList'
import { MyLibraryHero } from '@/components/mylibrary'
import { Main } from '@/components/ui'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Main>
      <MyLibraryHero />
      <BookCategoryList title='CONTINUE READING' />
      <BookCategoryList title='SUGGESTED' />
      <BookCategoryList title='DOWNLOADED' />
      <BookCategoryList title='COMPLETED BOOKS' />
    </Main>
  )
}

export default page