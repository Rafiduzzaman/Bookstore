import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import progres from '../assets/progress.gif';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ book }) {
  const dispatch = useDispatch();
  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div>
      <div className=" bookDetails">
        <div className="firstCol">
          <div>
            <small>{book.author}</small>
            <h2>{book.title}</h2>
            <p>{book.category}</p>
          </div>
          <div>
            <button type="button" className="book-btn">Comments</button>
            <Button onClick={() => handleRemoveBook(book.item_id)} className="removeBtn" label="Remove" />
            <button type="button" className="book-btn">Edit</button>
          </div>
        </div>
        <div className="progressBarAndUpdateButton">
          <div className="secondCol">
            <img src={progres} alt="progresImg" className="progressImg" />
            <div className="aboutProgress">
              <div className="oval">
                <p className="progress">64%</p>
                <p className="completed">Completed</p>
              </div>
            </div>
          </div>
          <div>
            <h2>CURRENT CHAPTER</h2>
            <h2>
              CHAPTER
              <span>45</span>
            </h2>
            <button type="button" className="update-btn">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>

    </div>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
