// BookList.js
import React from 'react';
import BookCard from '../books/BookCard';

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};

export default BookList;
