import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

export default class BookPage extends Component {
 render() {
    const { updateShelf , books} = this.props;
    const { currentShelf } = ['currentlyReading', 'wantToRead', 'read'];
    
    return(
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/*the .map and .filter return books for each book based on the current shelf */}
                    {books.filter(book => book.shelf === 'currentlyReading')
                          .map(book => (
                        <li key={book.id}>
                            <Book book ={book}
                            updateShelf={updateShelf}
                            currentShelf= {currentShelf}
                            />
                        </li>
                        ))
                        }
                    </ol> 
                </div>
            </div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {/*the .map and .filter return books for each book based on the current shelf */}
            {books.filter(book => book.shelf === 'wantToRead')
                .map(book => (
                <li key={book.id}>
                    <Book book ={book} 
                    updateShelf={updateShelf}
                    currentShelf='wantToRead'   
                    />
                 </li>
                  ))
                }
            </ol>
        </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                     {/*the .map and .filter return books for each book based on the current shelf */}
                    {books.filter(book => book.shelf === 'read')
                        .map(book => (
                        <li key={book.id}>
                            <Book book ={book} 
                            updateShelf={updateShelf}
                            currentShelf= 'read'
                            />
                        </li>
                        ))
                    }
                    </ol>
                </div>
             </div>
            </div>
        </div>
        
        <div className="open-search">
            <Link to='/search'>Add a book</Link>
        </div>
        </div>
    )
  }
}