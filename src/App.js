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
      this.setState({ books })
    })
  }

  // removeContact = (contact) => {
  //   this.setState(state =>({
  //       contacts: state.contacts.filter(
  //         c => c.id !== contact.id)
  //   }))
  //   ContactsAPI.remove(contact)
  // }

  // createContact(contact){
  //   ContactsAPI.create(contact).then(contact => {
  //     this.setState(state => ({
  //       contacts:state.contacts.concat([ contact ])
  //     }))
  //   })
  //}

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Search />
        <Main  books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
