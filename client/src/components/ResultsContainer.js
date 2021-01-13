import React from "react";
import styled from "styled-components";

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
  const results = props.results.searchedBooks;
  console.log(results);
  return (
    <ResultsContainerDiv className="container">
      <div className="row">
        <h5>Results</h5>
      </div>
      <div className="row">
        {results.map(
          (book) => (
            <BookCard className="card">
              <div className="row">
                <div className="col">
                  <h5>{book.volumeInfo.title}</h5>
                  <span>Written by: </span>
                  {book.volumeInfo.authors.map((author) => (
                    <span>{author}</span>
                  ))}
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
                    <button>Save</button>
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
          )
        )}
      </div>
    </ResultsContainerDiv>
  );
};

export default ResultsContainer;
