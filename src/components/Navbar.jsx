import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

function Navbar() {
  return (
    <div className="panel-bg">
      <nav className="navbar innerWrapper">
        <ul className="navItems">
          <li>
            <Link className="bookstore-CMS" to="/">Bookstore CMS</Link>
          </li>
          <li>
            <Link className="books-nav" to="/">Books</Link>
          </li>
          <li>
            <Link className="books-nav" to="/categories">Categories</Link>
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
