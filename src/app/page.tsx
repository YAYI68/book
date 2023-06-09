import BookCategoryList from '@/components/common/BookCategoryList'
import BookListDetail from '@/components/common/BookListDetail'
import BrowseSubject from '@/components/home/BrowseSubject'
import Hero from '@/components/home/Hero'
import TrendingBooks from '@/components/home/TrendingBooks'
import { Banner, Main } from '@/components/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <Main >
     <Hero />
     <BrowseSubject/>
     <BookListDetail 
       title={'TRENDING BOOKS'}
     />
     <BookCategoryList 
     title='TOP PICKS FOR YOU'
     
     />
     <Banner />
     <BookCategoryList title='EDITORS CHOICE' />
     <BookCategoryList title='POPULAR CLASSIC' />
     <BookListDetail 
       title={'RECENTLY PUBLISHED'}
     />
    </Main>
  )
}
