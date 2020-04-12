import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'God always travel incognito', id: uuid() },
    { title: 'Pentagram', id: uuid() },
    { title: 'Alice in wonderland', id: uuid() },
    { title: 'Forest of gods', id: uuid() }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;