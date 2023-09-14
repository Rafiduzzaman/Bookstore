import React from 'react';
import BookList from '../components/BookList';
import Form from '../components/Form';

function Books() {
  return (
    <div className="innerWrapper">
      <BookList />
      <hr className="hrDivider" />
      <h2 className="addNewBook">ADD NEW BOOK</h2>
      <Form />
    </div>
  );
}

export default Books;
