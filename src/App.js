import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route} from 'react-router-dom'
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
    this.setState({ books: books })
  })
}
  updateShelf = (book, shelf) =>{
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then(books => {
    this.setState({ books: books })
    })
  }
  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <BookPage  books={this.state.books}
               updateShelf= {this.updateShelf}/>
        )} />
      <Route exact path='/Search' render={() => (
        <Search updateShelf= {this.updateShelf} 
                books= {this.state.books} />
        )} />      
      </div>
    )
  }
}