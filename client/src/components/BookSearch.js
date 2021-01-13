import axios from 'axios';
import React, { useState } from 'react';
import { FormBtn, Input } from './Form';
import ResultsContainer from './ResultsContainer';
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const MY_KEY = process.env.REACT_APP_API_KEY_GOOGLE_BOOKS

const BookSearch = () => {
    const [userInput, setUserInput] = useState({
        book: ''
    })
    const [searchedBooks, setSearchedBooks] = useState({
        searchedBooks: [],
    })

    let googleBooksArray = [];

    const { book } = userInput;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInput({...userInput, [name]: value});
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!book) {
            return
        } else {
            try{
            let results = await axios.get(baseURL + book.replace(/\s/g, ''));
            console.log(baseURL + book.replace(/\s/g, '+'))
            googleBooksArray = await results.data.items;
            setSearchedBooks({...searchedBooks, searchedBooks: googleBooksArray})
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <div className="container">
            <div className="row">
                <h5>Book Search</h5>
            </div>
            <div className="row">
                <form>
                    <div className='form-row'>
                        <Input 
                            onChange={handleInputChange}
                            name='book'
                            placeholder='Where the Wild Things Are'
                            value={book}
                        />
                        <FormBtn
                            onClick={handleFormSubmit}
                        >
                            Search
                        </FormBtn>
                    </div>
                </form>
            </div>
            <div className="row">
                <ResultsContainer 
                    results={searchedBooks}
                />
            </div>
        </div>
    )
}

export default BookSearch;