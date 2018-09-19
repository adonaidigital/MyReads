import React, { Component } from 'react'

class Book extends Component {
render() {
    // const { books, handleChange } = this.props;
    let bookDisplayed = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';

    return (
     <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, 
                backgroundImage: `url("${bookDisplayed}")`}}></div>
            <div className="book-shelf-changer">
                <select value= {this.props.book.shelf} 
                onChange={(e) => this.props.updateShelf(this.props.book, e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>            
     )
  }
}

export default Book;