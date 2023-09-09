import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

function Navbar() {
  return (
    <div className="panel-bg">
      <nav className="navbar">
        <ul className="navItems">
          <li className="bookstore-CMS">
            <Link to="/">Bookstore CMS</Link>
          </li>
          <li className="books-nav">
            <Link to="/">Books</Link>
          </li>
          <li className="books-nav">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <div>
          <img src={user} alt="avatar" className="avatar" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
