import React, { Component } from "react";
import Header from "./header";
import Table from "./table"
import Form from "./form"
import storeBooks from "./storeBooks"
import "../styles/main.css"
import "../styles/styles.css"

class App extends Component {
    state = {
      books: storeBooks(),
      newBook: {
        title: "",
        author: "",
        pages: "",
        read: "no"
      },
      errors: {
        title: "",
        author: "",
        pages: ""
       },
       isShown: false,
    }

  removeRow = (index) =>{
    let booksClone = JSON.parse(localStorage.getItem('library'));
    booksClone.splice(index, 1)
    localStorage.setItem('library', JSON.stringify(booksClone))
    this.setState({books: storeBooks()})
  }

  toggleShown = () => {
    this.setState({
      isShown: !this.state.isShown,
      addShown: !this.state.addShown
    })
  }

  toggleRead = (index) =>{
    let booksClone = JSON.parse(localStorage.getItem('library'));
    booksClone[index].read = booksClone[index].read == '✔' ? '❌' : '✔'
    localStorage.setItem('library', JSON.stringify(booksClone))
    this.setState({ books: storeBooks()})
  }

  handleChange = (e) => {
    const {value, name } = e.target
      this.setState(prevState => ({
        newBook: {
          ...prevState.newBook,
          [name]: value
        }
      }))
  }

  handleSubmit =(e) => {
    e.preventDefault()
    let booksClone = this.state.books.slice()
    booksClone.push({
      title: this.state.newBook.title,
      author: this.state.newBook.author,
      pages: this.state.newBook.pages,
      read: this.state.newBook.read == "yes" ? '✔' : '❌'
    })
    localStorage.setItem('library', JSON.stringify(booksClone))
    this.setState({
      books: storeBooks(),
      newBook: {
        title: "",
        author: "",
        pages: "",
        read: "no"
      }
    })
  }

  render() {
    return (
      <div className="flex flex-col items-center ">
        <Header />
        <Table
        data={this.state.books}
        removeRow={this.removeRow}
        toggleRead={this.toggleRead}
        />
        <Form
        submitForm={this.handleSubmit}
        titleValue={this.state.newBook.title}
        authorValue={this.state.newBook.author}
        pagesValue={this.state.newBook.pages}
        handleChange={this.handleChange}
        read={this.state.newBook.read}
        error={this.state.errors}
        isShown={this.state.isShown}
        toggleShown={this.toggleShown}
        addShown={this.state.addShown}
        />
      </div>
    )
  }
}

export default App