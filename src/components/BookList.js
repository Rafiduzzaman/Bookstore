import React from 'react';
import Book from './Book';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Classic',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      category: 'Romance',
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
