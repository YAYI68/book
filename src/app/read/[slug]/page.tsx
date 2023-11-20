"use client";
import { Main } from "@/components/ui";
import { useRef, useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./page.css";
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
  // maxImageSize: 700,
};

type Props = {};

const PageComponent = ({ params }: { params: { slug: string } }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdf, setPdf] = useState<any>();
  const DocumentRef = useRef(null);
  const [pageValue, setPageValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  console.log("I'm here ", params.slug);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  const handleOnChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const page = Number(pageValue);
    setPageNumber(page);
  };

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    const elem = Array.from(document.querySelectorAll(".react-pdf__Page"));
    console.log({ elem });
  }, [pdf]);

  console.log({ pdf });
  return (
    <Main>
      <div className="w-full flex justify-center  items-center gap-4 fixed z-[2] p-4 bg-yellow-500 left-0">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="rounded-md dark:bg-white dark:text-black py-2 px-4 border"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          Page{" "}
          <form onSubmit={handleSubmit} action="">
            <input
              // value={pageNumber}
              defaultValue={pageNumber}
              type="text"
              className="w-[1.5rem] h-[1.5rem] text-center  outline-none border"
              onChange={(e) => setPageValue(e.target.value)}
            />
          </form>{" "}
          / {numPages || "--"}
        </div>
        {/* {pageNumber || (numPages ? 1 : "--")} */}
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="rounded-md dark:bg-white dark:text-black py-2 px-4 border"
        >
          Next
        </button>
      </div>
      <div className="mt-[5rem]">
        <input type="file" onChange={handleOnChange} />
      </div>
      <div className="Example__container__document">
        <Document
          ref={DocumentRef}
          options={options}
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              width={650}
              key={`page_${index + 1}`}
              pageNumber={index + 1 + (pageNumber - 1)}
            />
          ))}
          {/* <Page  pageNumber={pageNumber} /> */}
        </Document>
      </div>
    </Main>
  );
};

export default PageComponent;
