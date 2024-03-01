import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as id4 } from 'uuid';
import { newBook } from '../redux/books/books';
import styles from './AddNewBook.module.css';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(newBook({
        item_id: id4(), title, author, category,
      }));
    }
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const lineStyle = {
    width: '100%',
    height: '0.125rem',
    margin: '2.5rem 0.063rem 1.813rem 0',
    borderBottom: 'solid 1px #e8e8e8',
  };

  const formStyle = {
    width: '88%',
    margin: '2.313rem auto 2.313rem',
  };

  return (
    <>
      <form style={formStyle}>
        <div style={lineStyle} />
        <h2>Add New Book</h2>
        <input type="text" placeholder="Book title" className={styles.title} value={title} onChange={handleTitleInput} />
        <input type="text" placeholder="Book author" className={styles.author} value={author} onChange={handleAuthorInput} />
        <select name="Book Categories" className={styles.categories} onChange={handleCategoryInput}>
          <option value="Select category">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Motivation">Motivation</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Economy">Economy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
        </select>
        <button type="button" className={styles.button} onClick={handleClick}>ADD BOOK</button>
      </form>
    </>
  );
};

export default AddNewBook;
