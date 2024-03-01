import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksFromApi } from '../redux/books/books';
import BookDetails from './BookDetails';

const BookContainer = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromApi());
  }, [dispatch]);
  return (
    <>
      <main>
        {books.map((book) => (
          <div key={book.item_id} className="bookstore-container">
            <BookDetails book={book} />
          </div>
        ))}
      </main>
    </>
  );
};

export default BookContainer;
