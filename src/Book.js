import React, { Component } from 'react'
export default class Book extends Component {
render() {
    const { updateShelf, book } = this.props;

    const coverImage = book.imageLinks ? book.imageLinks.thumbnail : '';

    return (
     <div className="book">
        <div className="book-top">
            <div className="book-cover" 
                 style={{ width: 128, height: 193, 
                 backgroundImage: `url("${coverImage}")`}}></div>
            <div className="book-shelf-changer"> 
                <select value= {this.props.currentShelf} 
                onChange={(e) => updateShelf(book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>  
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
    </div>
               
     )
  }
}