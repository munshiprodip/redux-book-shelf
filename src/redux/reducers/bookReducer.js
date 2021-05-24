import allBooks from "../../fakeData/books.json";

// make initial state for book reducer
const initialState = {
  allBookList: allBooks,
  readingBookList: [],
  finishedBookList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      // check is exist or not in reading list
      const isExist = !!state.readingBookList.find(
        (book) => book.id === action.payload.id
      );

      // create new state
      const newState = {
        ...state,
        readingBookList: [...state.readingBookList, action.payload],
      };

      // if isExist return previous state else new state
      return isExist ? state : newState;
    }

    case "REMOVE_FROM_READING_LIST": {
      // create new state
      const newState = {
        ...state,
        readingBookList: state.readingBookList.filter(
          (book) => book.id !== action.payload
        ),
      };

      return newState;
    }

    case "ADD_TO_FINISHED_LIST": {
      // check is exist or not in finished list
      const isExist = !!state.finishedBookList.find(
        (book) => book.id === action.payload.id
      );

      // create new state
      const newState = {
        ...state,
        readingBookList: state.readingBookList.filter(
          (book) => book.id !== action.payload.id
        ),
        finishedBookList: [...state.finishedBookList, action.payload],
      };

      // if isExist return previous state else new state
      return isExist ? state : newState;
    }

    case "REMOVE_FROM_FINISHED_LIST": {
      // create new state
      const newState = {
        ...state,
        finishedBookList: state.finishedBookList.filter(
          (book) => book.id !== action.payload
        ),
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;
