import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <div className="actions">
        <Link to={`/edit-blog/${blog._id}`}>Edit</Link>
        <button onClick={() => onDelete(blog._id)}>Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;