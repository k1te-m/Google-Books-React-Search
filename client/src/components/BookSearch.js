import React, { useState } from 'react';
import { FormBtn, Input } from './Form';

const BookSearch = () => {
    const [userInput, setUserInput] = useState({
        book: ''
    })
    // const [searchedBooks, setSearchedBooks] = useState({
    //     searchedBooks: [],
    // })

    // let booksArray:any = [];

    const { book } = userInput;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInput({...userInput, [name]: value});
    }

    const handleFormSubmit = (event, userInput) => {
        event.preventDefault();
        
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
                        <FormBtn>
                            Search
                        </FormBtn>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookSearch;