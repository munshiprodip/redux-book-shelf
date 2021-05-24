// action for add a book to reading list
export const addToReadingList = (payload) => {
  return {
    type: "ADD_TO_READING_LIST",
    payload,
  };
};

// action for remove a book from reading list
export const removeFromReadingList = (payload) => {
  return {
    type: "REMOVE_FROM_READING_LIST",
    payload,
  };
};

// action for add a book to finished list
export const addToFinishedList = (payload) => {
  return {
    type: "ADD_TO_FINISHED_LIST",
    payload,
  };
};

// action for remove a book from finished list
export const removeFromFinishedList = (payload) => {
  return {
    type: "REMOVE_FROM_FINISHED_LIST",
    payload,
  };
};
