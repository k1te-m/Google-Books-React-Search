import React, { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../utils/API";

const SavedBooksDiv = styled.div`
  border: 1px solid black;
`;

const BookCard = styled.div`
  height: auto;
  overflow: auto;
`;

const BookImage = styled.img`
  position: absoulte;
  top: 0%;
  width: 128px;
  max-height: 200px;
`;

const SavedBooksContainer = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  let books = [];

  const getBooks = () => {
    API.getBooks().then((response) => {
      books = response.data;
      setSavedBooks(books);
    });
  };

  const deleteBook = (book) => {
    const id = book._id;
    API.deleteBook(id)
       .then(res => getBooks())
       .catch(err => console.log(err))
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <SavedBooksDiv className="container">
      <div className="row">
        <h5>Saved Books</h5>
      </div>
      <div className="row">
        {savedBooks.map((book) => (
          <BookCard className="card" key={book._id}>
            {console.log(book)}
            <div className="row">
              <div className="col">
                <h5>{book.title}</h5>
                <span>Written by: </span>
                <span>
                  {book.authors
                    ? book.authors.join(", ")
                    : ""}
                </span>
              </div>
              <div className="col d-flex justify-content-end">
                <a href={book.previewLink} target="_blank" rel="noreferrer">
                  <button>View</button>
                </a>
                <a>
                  <button onClick={() => deleteBook(book)}>Delete</button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-3 d-flex justify-content-center">
                <BookImage src={book.image} />
              </div>
              <div className="col-9">
                <p>{book.description}</p>
              </div>
            </div>
          </BookCard>
        ))}
      </div>
    </SavedBooksDiv>
  );
};

export default SavedBooksContainer;
