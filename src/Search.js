import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

export default class Search extends Component {
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
        const { books, updateShelf } = this.props;
        const { Results, query } = this.state;

       return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>         
            <div className="search-books-input-wrapper">
                <input 
                    value={query} 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={(e) => this.updateQuery(e.target.value)}
                    />
            </div>
        </div>
        <div className="search-books-Results">
          <ol className="books-grid">
          {/* this is to return the books search while comparing it with its current shelf*/}
          {Results.map(Results =>{
            let shelf ='none'
            books.map(book =>(
                book.id === Results.id ? shelf =book.shelf: ''
            ))
            return (
                <li key={Results.id}>
                    <Book book={Results} 
                    updateShelf={updateShelf}
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


/* Referenced
https://css-tricks.com/understanding-react-setstate/ 
Maeva Nap walkthrough on MyReads --https://www.youtube.com/watch?v=i6L2jLHV9j8
Rodrick Bloomfield walkthrough on myReads --https://drive.google.com/drive/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb
https://reactjs.org/docs/react-component.html

*/