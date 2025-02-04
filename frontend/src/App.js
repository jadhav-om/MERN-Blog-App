import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import EditBlog from './components/EditBlog'; // Import the EditBlog component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000} // Close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;