// Action Type
const STATUS = 'BOOKSTORE/categories/STATUS';

const initialState = [];

// Reducer Function

const checkStatus = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// status action

export const statusCheck = () => ({
  type: STATUS,
});

export default checkStatus;
