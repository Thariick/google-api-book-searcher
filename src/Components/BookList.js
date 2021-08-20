import React from 'react';

const BookList = (props) => {
    return (
        <div>
            {props.books.map ((book, index) => (
            <div className = 'd-flex justify-content-start m-3'>
                <img src = {book.imageLinks} alt = {book.title}></img>
            </div>
            ))}
        </div>
    )
}

export default BookList;
