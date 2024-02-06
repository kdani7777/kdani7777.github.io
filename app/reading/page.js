'use client';
import Book from "../ui/book";
import NavMobile from "../ui/nav-mobile";
import { books } from "./book-data";
import { ToastContainer } from "react-toastify";

export default function BookGrid() {
  return (
    <>
      <NavMobile />
      <ToastContainer />
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-3xl text-center my-4 md:my-8 font-bold">books i have read</h1>
        <p className="text-center mb-4 font-semibold">(in recent memory)</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8">
          {books.map((book) => (
            <a key={book.id} href={book.link}>
              <Book {...book} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}