import React from 'react'
import { Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookPage from './BookPage' 
import Search from './Search' 

export default class BooksApp extends React.Component {
  
  state= {
    books: []
  }
 
  //to render all books and to make changes to the state of books
  componentDidMount()
    {BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
}
   //this updates based on the current shelf
  updateShelf = (book, currentShelf) =>{
      BooksAPI.update(book, currentShelf).then(() =>{
        this.updateResults();
      }) 
    }
      updateResults(){
      BooksAPI.getAll().then(books => {
        this.setState({ books })
      })
    }
  
  
  render() {
    const { books } = this.state;
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <BookPage books = {books}
               updateShelf= {this.updateShelf}/>
        )} />
      <Route exact path='/Search' render={() => (
        <Search updateShelf= {this.updateShelf} 
                books = {books} />
        )} />      
      </div>
    )
  }
}

/* Referenced
https://css-tricks.com/understanding-react-setstate/ 
Maeva Nap walkthrough on MyReads --https://www.youtube.com/watch?v=i6L2jLHV9j8
Rodrick Bloomfield walkthrough on myReads --https://drive.google.com/drive/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb
https://reactjs.org/docs/react-component.html

*/