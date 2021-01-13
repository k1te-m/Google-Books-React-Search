import React from "react";

const ResultsContainer = (props) => {
  const results = props.results.searchedBooks;
  console.log(results);
  return (
    <div className="container">
      <div className="row">
        <h5>Results</h5>
      </div>
      <div className="row">
        {results.map((book) =>
            <div className="container">
                <div className="row">
                    <h5>{book.volumeInfo.title}</h5>
                    <span>Written by:</span>
                    {book.volumeInfo.authors.map((author) => 
                        <span>{author}</span>
                    )}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};


export default ResultsContainer;
