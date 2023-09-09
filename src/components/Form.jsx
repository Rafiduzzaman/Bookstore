import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice'; // Import the 'addBook' action
import Button from './Button';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); // State for the book title
  const [author, setAuthor] = useState(''); // State for the author
  const [category, setCategory] = useState('action'); // State for the book category
  function generateUniqueId() {
    const id = Math.random().toString(36).substring(2, 10);
    return id;
  }

  const handleAddBook = () => {
    const book = {
      item_id: generateUniqueId(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('action');
  };

  return (
    <div className="pageWrapper bookForm">
      <div className="bookTitle">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="bookAuthor">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)} // Handle author input change
        />
      </div>
      <div className="bookCategory">
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="action">Action</option>
          <option value="economy">Economy</option>
          <option value="scienceFiction">Science Fiction</option>
        </select>
      </div>
      <div>
        <Button onClick={handleAddBook} className="addBook" label="Add Book" />
      </div>
    </div>
  );
}

export default Form;
