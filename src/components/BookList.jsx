import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {
      books.map((eachBook) => <Book key={eachBook.item_id} book={eachBook} />)
      }
    </div>
  );
}

export default BookList;
