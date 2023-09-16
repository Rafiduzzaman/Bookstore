import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import progres from '../assets/progress.png';
import { removeBookAsync } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ book }) {
  const dispatch = useDispatch();
  const handleRemoveBook = (bookId) => {
    dispatch(removeBookAsync(bookId));
  };
  return (
    <div className="bookPanel">
      <div className=" bookDetails">
        <div className="firstCol">
          <div>
            <p className="category">{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <small className="author">{book.author}</small>
          </div>
          <div className="controlBox">
            <button type="button" className="book-btn">Comments</button>
            <div className="divider" />
            <Button onClick={() => handleRemoveBook(book.item_id)} className="removeBtn" label="Remove" />
            <div className="divider" />
            <button type="button" className="book-btn">Edit</button>
          </div>
        </div>
        <div className="progressBarAndUpdateButton">
          <div className="secondCol">
            <img src={progres} alt="progresImg" className="progressImg" />
            <div className="aboutProgress">
              <div className="oval">
                <p className="progressVal">64%</p>
                <p className="completed">Completed</p>
              </div>
            </div>
          </div>
          <div className="lineDivider" />
          <div className="bookStage">
            <h2 className="currentChapter">CURRENT CHAPTER</h2>
            <h2 className="chapter">
              CHAPTER&nbsp;
              <span>45</span>
            </h2>
            <button type="button" className="updateBtn">UPDATE PROGRESS</button>
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
