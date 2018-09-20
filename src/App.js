import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './Main' 
import Search from './Search' 

class BooksApp extends React.Component {

  state= {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books })
    })
  }


  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then(books => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">

      <Route exact path='/' render={() => (
        <Main  books={this.state.books}
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

export default BooksApp
