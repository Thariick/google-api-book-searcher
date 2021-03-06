import React from 'react';
import PropTypes from 'prop-types'


const BookList = (props) => {
    const FavoComponent = props.favoComponent;
    return (
        <div>
            {props.books.map((books, index) => (
            <div className = 'image-container d-flex justify-content-start m-3'>
                <img src = {books.items} alt = {books.items.volumeInfo.title}></img>
                <div onClick = {() => props.handleFavoClick} className = "overlay d-flex align-items-center justify-content-center"></div>
                    <FavoComponent/>
            </div>
            ))}
        </div>
    )
}

export default BookList;
