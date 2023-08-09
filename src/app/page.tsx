import { headers } from "next/headers";
import BookCategoryList from "@/components/common/BookCategoryList";
import BookListDetail from "@/components/common/BookListDetail";
import BrowseSubject from "@/components/home/BrowseSubject";
import Hero from "@/components/home/Hero";
import { Banner, Main } from "@/components/ui";

// `http://localhost:3000/api/book/?page=2&limit=4&catalog=trends&category=science`,
async function getAllBooks() {
  const res = await fetch(`http://localhost:3000/api/readbook/`, {
    // cache: "no-store",
    // credentials: "include",
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ bookId: "64d1f05d3915ce3b66a1da37" }),
  });

  if (!res.ok) {
    console.error("Failed to fetch All Books!");
  }
  return res.json();
}
export default async function Home() {
  const { data } = await getAllBooks();
  console.log({ data });
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
