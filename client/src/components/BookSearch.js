import React from 'react';

const BookSearch = () => {
    // const [userInput, setUserInput] = useState({
    //     book: ''
    // })
    // const [searchedBooks, setSearchedBooks] = useState({
    //     searchedBooks: [],
    // })

    // let booksArray:any = [];

    // const { book } = userInput;

    // const handleInputChange = (event:any) => {
    //     const { name, value } = event.target;
    //     setUserInput({...userInput, [name]: value});
    // }

    // const handleFormSubmit = (event:any) => {
    //     event.preventDefault();
    //     if (!book) {
    //         return
    //     } else {
            
    //         API.getBooks().then(results => {
    //             booksArray.push(results);
    //             setSearchedBooks({...searchedBooks, searchedBooks: booksArray})
    //         })
    //     }
    // }

    return (
        <div className="container">
            <div className="row">
                <h5>Book Search</h5>
            </div>
            <div className="row">
                <form>
                    <div className='form-row'>
                        <input />
                        <button>Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookSearch;