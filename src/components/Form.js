import React from 'react';

function Form() {
  return (
    <div className="pageWrapper  bookForm">
      <div className="bookTitle">
        <input type="text" placeholder="Book Title" />
      </div>
      <div className="bookCategory">
        <select name="category" id="category">
          <option value="action">Action</option>
          <option value="economy">Economy</option>
          <option value="scienceFiction">Science Fiction</option>
        </select>
      </div>
      <div>
        <button type="button">Add Book</button>
      </div>

    </div>
  );
}

export default Form;
