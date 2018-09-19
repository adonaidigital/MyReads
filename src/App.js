import React from 'react'
import * as BooksAPI from './BooksAPI'
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
    // console.log(this.state.books);
    return (
      <div className="app">
        <Search />
        {/**<Main  books={this.state.books}
    updateShelf= {this.updateShelf}/>**/}
      </div>
    )
  }
}

export default BooksApp
