import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/books';
import styles from './BookDetails.module.css';

const BookDetails = ({ book }) => {
  const {
    // eslint-disable-next-line camelcase
    item_id, title, author, category,
  } = book;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBookFromApi(item_id));
  };
  return (
    <>
      <div className={styles.book_content}>
        <div className={styles.book_wrapper}>
          <p className={styles.category}>
            {category}
          </p>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.author}>
            {author}
          </p>
          <div className={styles.book_tools}>
            <p>Comments</p>
            <span />
            <button type="button" onClick={handleClick} className={styles.remove}>Remove</button>
            <span />
            <p>Edit</p>
          </div>
        </div>
        <div className={styles.progress_content}>
          <div className={styles.completed_percent}>
            <div className={styles.circular_progress_container}>
              <div className={styles.circular_progress} />
            </div>
            <div>
              <p className={styles.percent}>62%</p>
              <p className={styles.completed}>Completed</p>
            </div>
          </div>
          <span />
          <div className={styles.current_chapter_wrapper}>
            <p className={styles.current_chapter}>CURRENT CHAPTER</p>
            <p className={styles.chapter_number}>Chapter17</p>
            <button type="button" className={styles.update_button}>UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookDetails;
