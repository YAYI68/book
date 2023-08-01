import { headers } from "next/headers";
import BookCategoryList from "@/components/common/BookCategoryList";
import BookListDetail from "@/components/common/BookListDetail";
import BrowseSubject from "@/components/home/BrowseSubject";
import Hero from "@/components/home/Hero";
import { Banner, Main } from "@/components/ui";

async function getAllBooks() {
  const res = await fetch(
    `http://localhost:3000/api/book/?page=2&limit=4&catalog=trends&category=history`,
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
      <BookListDetail title={"TRENDING BOOKS"} />
      <BookCategoryList title="TOP PICKS FOR YOU" />
      <Banner />
      {/* <BookCategoryList title="EDITORS CHOICE" /> */}
      <BookCategoryList title="POPULAR CLASSIC" />
      <BookListDetail title={"RECENTLY PUBLISHED"} />
    </Main>
  );
}
