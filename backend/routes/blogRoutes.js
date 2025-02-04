const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Create a blog
router.post('/', async (req, res) => {
  const { title, image, description } = req.body;
  try {
    const blog = new Blog({ title, image, description });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a blog
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, image, description } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, image, description }, { new: true });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;