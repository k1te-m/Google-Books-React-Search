import React from 'react';
import BookSearch from '../components/BookSearch'
import ResultsContainer from '../components/ResultsContainer';

const Search = () => {
    return (
        <div className="container">
            <div className="row">
                <BookSearch />
            </div>
            <div className="row">
               <ResultsContainer />
            </div>
            
        </div>
    )
}

export default Search;