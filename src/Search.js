import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    state = {
        query: '',
        Results: []
    }
 
    updateQuery = (query) => {
        this.setState({ 
        query: query })
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
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
          {this.state.Results.map(Results =>(
            <li key={Results.id}>
            <Book book={Results} />
            </li>
            ))
          }
          </ol>
        </div>
    </div>
       )
    }
}

export default Search;