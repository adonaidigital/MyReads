import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {
    state = {
        query: '',
        Results: []
    }
 
    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateResults(query)
        }

    updateResults = (query) =>  {
        if (query) {
            BooksAPI.search(query).then((Results) => {
                if (Results.error){
                    this.setState({ Results: [] })  
                }else{
                    this.setState({ Results: Results })
                }
            })       
        } else {
            this.setState({ Results: [] })       
        }
    }   

    render() {
       return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>         
            <div className="search-books-input-wrapper">
                <input 
                    value={this.state.query} 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={(e) => this.updateQuery(e.target.value)}
                    />
            </div>
        </div>
        <div className="search-books-Results">
          <ol className="books-grid">
          {this.state.Results.map(Results =>{
            let shelf ='none'
            this.props.books.map(book =>(
                book.id === Results.id ? shelf =book.shelf: ''
            ))
            return (
                <li key={Results.id}>
                    <Book book={Results} 
                    updateShelf={this.props.updateShelf}
                    currentShelf={shelf}
                    />
                </li>
                )
            })
          }
          </ol>
        </div>
    </div>
       )
    }
}

export default Search;