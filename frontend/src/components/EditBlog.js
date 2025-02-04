import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditBlog.css';

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    image: '',
    description: '',
  });

  // Fetch the blog data to populate the form
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err);
       // toast.error('Failed to fetch blog data');
      }
    };
    fetchBlog();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blog);
      toast.success('Blog updated successfully');
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Failed to update blog');
    }
  };

  return (
    <div className="edit-blog">
     <center> <h2>Edit Blog</h2> </center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={blog.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={blog.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={blog.description}
          onChange={handleChange}
          required
        />
      <center>  <button type="submit">Update Blog</button></center>
      </form>
    </div>
  );
};

export default EditBlog;