import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BlogCard from './BlogCard';
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('https://mern-blog-app-api-sxag.onrender.com/api/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mern-blog-app-api-sxag.onrender.com/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      toast.success('Post deleted'); // Show toast notification
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete post'); // Show error toast if deletion fails
    }
  };

  return (
    <div className="blog-list">
     <center> <h2>My Blogs</h2></center>
      <div className="blogs-container">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
