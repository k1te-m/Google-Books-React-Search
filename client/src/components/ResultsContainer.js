import React, { useState } from "react";
import styled from "styled-components";
import API from "../utils/API";

const ResultsContainerDiv = styled.div`
  .card {
    border: 1px solid #212529;
  }
`;

const StyledRow = styled.div`
  background-color: #212529;
  color: white;
`;

const StyledButton = styled.button`
  background-color: #212529;
  color: white;
  border-radius: 5px;
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
      <StyledRow className="row">
        <h5>Results</h5>
      </StyledRow>
      <div className="row">
        {results.map((book) => (
          <BookCard className="card" key={book.id}>
            <div className="row">
              <div className="col">
                <h5>{book.volumeInfo.title}</h5>
                <span>Written by: </span>
                <span>
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : ""}
                </span>
              </div>
              <div className="col d-flex justify-content-end">
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledButton>View</StyledButton>
                </a>
                <a>
                  <StyledButton onClick={() => saveBook(book)}>
                    Save
                  </StyledButton>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-3 d-flex justify-content-center">
                <BookImage
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "https://via.placeholder.com/150"
                  }
                />
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
