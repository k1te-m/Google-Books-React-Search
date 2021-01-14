import React, { useState } from "react";
import styled from "styled-components";
import API from "../utils/API";

const ResultsContainerDiv = styled.div`
  border: 1px solid black;
`;

const BookImage = styled.img`
  position: absoulte;
  top: 0%;
  width: 128px;
  max-height: 200px;
`;

const BookCard = styled.div`
  height: auto;
  overflow: auto;
`;

const ResultsContainer = (props) => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  });

  const saveBook = (book) => {
    setBookInfo({
      ...bookInfo,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink,
    });
    API.saveBook({
      ...bookInfo,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink,
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Book Saved");
        }
      })
      .catch((error) => console.error(error));
  };

  const results = props.results.searchedBooks;
  
  return (
    <ResultsContainerDiv className="container">
      <div className="row">
        <h5>Results</h5>
      </div>
      <div className="row">
        {results.map((book) => (
          <BookCard className="card" key={book.id}>
            <div className="row">
              <div className="col">
                <h5>{book.volumeInfo.title}</h5>
                <span>Written by: </span>
                <span>{book.volumeInfo.authors.join(", ")}</span>
              </div>
              <div className="col d-flex justify-content-end">
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>View</button>
                </a>
                <a>
                  <button onClick={() => saveBook(book)}>Save</button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-3 d-flex justify-content-center">
                <BookImage src={book.volumeInfo.imageLinks.thumbnail} />
              </div>
              <div className="col-9">
                <p>{book.volumeInfo.description}</p>
              </div>
            </div>
          </BookCard>
        ))}
      </div>
    </ResultsContainerDiv>
  );
};

export default ResultsContainer;
