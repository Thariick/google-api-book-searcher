import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BookList from './Components/BookList';
import SearchBox from './Components/SearchBox';
import BookListHeading from './Components/BookListHeading';
import AddFavo from './Components/AddFavo';



const App = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getBookRequest = async (searchValue) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyAgRE-A2wp7qRzaeee-VW7mbaPRRY1FQBk&maxResults=40`
    const response = await fetch (url);
    const responseJson = await response.json();
    if (responseJson.volumeInfo) {
     setBooks(responseJson.volumeInfo)
   }
  };

  useEffect(() => {
    getBookRequest(searchValue);
  }, [searchValue]);

  return <div className = 'container-fluid book-app'>
            <div className = 'row d-flex align-items-center mt-4 mb-4'>
              <BookListHeading heading = 'Books'/>
              <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue}/>
            </div>
            <div className = 'row'>
              <BookList books = {books} favoComponent = {AddFavo}/>
            </div>
          </div>
}



export default App;
