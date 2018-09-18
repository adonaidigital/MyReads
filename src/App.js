import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main' 
import Search from './Search' 

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Search />
        <Main />
      </div>
    )
  }
}

export default BooksApp
