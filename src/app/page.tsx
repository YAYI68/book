import { headers } from "next/headers";
import BookCategoryList from "@/components/common/BookCategoryList";
import BookListDetail from "@/components/common/BookListDetail";
import BrowseSubject from "@/components/home/BrowseSubject";
import Hero from "@/components/home/Hero";
import { Banner, Main } from "@/components/ui";

async function getAllBooks() {
  const res = await fetch(
    `http://localhost:3000/api/book/?page=2&limit=4&catalog=trends&category=science`,
    {
      cache: "no-store",
      credentials: "include",
      method: "GET",
      headers: headers(),
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch All Books!");
  }
  return res.json();
}
export default async function Home() {
  const { data } = await getAllBooks();
  console.log({ books: data });
  return (
    <Main>
      <Hero />
      <BrowseSubject />
      <BookListDetail
        seeMoreHref="/books?catalog=recent"
        title={"TRENDING BOOKS"}
      />
      <BookCategoryList
        seeMoreHref="/books?catalog=top_picked"
        title="TOP PICKS FOR YOU"
      />
      <Banner />
      <BookCategoryList
        seeMoreHref="/books?catalog=classic"
        title="POPULAR CLASSIC"
      />
      <BookListDetail
        seeMoreHref="/books?catalog=recent"
        title={"RECENTLY PUBLISHED"}
      />
    </Main>
  );
}
