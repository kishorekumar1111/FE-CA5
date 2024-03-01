/* eslint-disable camelcase */

import { createAsyncThunk } from '@reduxjs/toolkit';

// api
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/36CUKMZ3b6XU1OGGqMlp/books';

// actions
const ADD = 'BOOKSTORE/books/ADD';
const DELETE = 'BOOKSTORE/books/DELETE';
const FETCH_BOOKS = 'BOOKSTORE/books/FETCH_BOOKS';

// INITIAL STATE
export const initialState = {
  books: [],
};

// get books from API
export const getBooksFromApi = createAsyncThunk(
  FETCH_BOOKS,
  async (args, { dispatch }) => {
    const resp = await fetch(api);
    const bookData = await resp.json();
    const books = Object.keys(bookData).map((key) => {
      const book = bookData[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
    return books;
  },
);

// post a book to the api
export const newBook = (book) => async (dispatch) => {
  try {
    await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD,
    });
    dispatch(getBooksFromApi());
  } catch (error) {
    throw Error(error.message);
  }
};

export const deleteBookFromApi = (item_id) => (dispatch) => {
  fetch(`${api}/${item_id}`, {
    method: 'DELETE',
  })
    .then(() => dispatch({
      type: DELETE,
      payload: item_id,
    }))
    .then((data) => data);
};

// BOOK REDUCER
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      };
    case DELETE:
      return { books: state.books.filter((book) => book.item_id !== action.payload) };
    case FETCH_BOOKS:
      return {
        ...state, books: action.payload,
      };
    default:
      return state;
  }
};

// export default bookReducer;
export default bookReducer;
