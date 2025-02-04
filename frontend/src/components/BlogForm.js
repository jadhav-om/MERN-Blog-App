import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BlogForm.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, image, description };
    try {
      await axios.post('http://localhost:5000/api/blogs', blog);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="blog-form">
      <center><h2>Add Blog</h2></center>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
       <center> <button type="submit">Add Blog</button></center>
      </form>
    </div>
  );
};

export default BlogForm;