'use client';
import Book from "../ui/book";
import NavMobile from "../ui/nav-mobile";
import { books } from "./book-data";

export default function BookGrid() {
  return (
    <>
      <NavMobile />
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-3xl text-center my-4 md:my-8 font-bold">books i have read</h1>
        <p className="text-center mb-4 font-semibold">(as of January 31, 2024)</p>
        <div className="grid grid-cols-3 gap-4 p-4 md:p-8 border-solid border-indigo-400 border-2">
          {books.map((book) => (
            <Book key={book.id} {...book} />
          ))}
        </div>
      </div>
    </>
  );
}