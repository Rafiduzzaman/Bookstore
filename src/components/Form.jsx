import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';
import Button from './Button';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action');
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
    dispatch(addBookAsync(book));
    setTitle('');
    setAuthor('');
    setCategory('action');
  };

  return (
    <div className=" bookForm innerWrapper">
      <div className="bookTitle">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="bookAuthor">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="bookCategory">
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Business">Business</option>
          <option value="Human Nature">Human Nature</option>
          <option value="Love">Love</option>
          <option value="Academics">Academics</option>
          <option value="Life Lessons">Life Lessons</option>
          <option value="Economy">Economy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>
      <div>
        <Button onClick={handleAddBook} className="addBook" label="Add Book" />
      </div>
    </div>
  );
}

export default Form;
