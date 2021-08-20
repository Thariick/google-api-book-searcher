import React from 'react';

const BookList = (props) => {
    const FavoComponent = props.favoComponent;
    return (
        <div>
            {props.books.map ((book, index) => (
            <div className = 'image-container d-flex justify-content-start m-3'>
                <img src = {book.imageLinks} alt = {book.title}></img>
                <div onClick = {() => props.handleFavoClick} className = "overlay d-flex align-items-center justify-content-center"></div>
                    <FavoComponent/>
            </div>
            ))}
        </div>
    )
}

export default BookList;
