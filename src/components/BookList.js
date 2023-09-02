import React from 'react';
import Book from './Book';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'History',
    },
  ];
  return (
    <div>
      {
      books.map((eachBook) => <Book key={eachBook.id} book={eachBook} />)
      }
    </div>
  );
}

export default BookList;
