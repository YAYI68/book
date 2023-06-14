import BookCategoryList from '@/components/common/BookCategoryList'
import BookListDetail from '@/components/common/BookListDetail'
import BrowseSubject from '@/components/home/BrowseSubject'
import Hero from '@/components/home/Hero'
import TrendingBooks from '@/components/home/TrendingBooks'
import Banner from '@/components/ui/Banner'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex dark:bg-black min-h-screen flex-col items-center justify-between">
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
    </main>
  )
}
