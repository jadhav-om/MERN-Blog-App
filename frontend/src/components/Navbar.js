import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
  
    <nav className="navbar">
       
     <Link to="/" className="navbar-brand">My Blogs</Link>
      <Link to="/add-blog" className="navbar-link">Add Blog</Link>
      
    </nav>
  
  );
};

export default Navbar;