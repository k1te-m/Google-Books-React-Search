import React, { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../utils/API";

const SavedBooksDiv = styled.div`
  border: 1px solid black;
`;

const SavedBooksContainer = () => {
    const [savedBooks, setSavedBooks] = useState({})

    let books = {};

    const getBooks = () => {
        API.getBooks().then((response) => {
            books = response.data;
            setSavedBooks(books);
        })
    }

    useEffect(() => {
        getBooks();
    },[])

    return (
        <SavedBooksDiv className='container'>
            <div className='row'>
                <h5>Saved Books</h5>
            </div>

        </SavedBooksDiv>
    )
}

export default SavedBooksContainer;