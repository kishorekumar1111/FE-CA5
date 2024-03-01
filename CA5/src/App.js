import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Book from './components/Book';
import Category from './components/Category';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </BrowserRouter>
);

export default App;
