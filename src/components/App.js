import React, { Component } from "react";
import Header from "./header";
import Table from "./table"
import Form from "./form"
import "../styles/main.css"
import "../styles/styles.css"

class App extends Component {
    state = {
      books: [
        {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 442,
        read: "true"
      },
      {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 442,
        read: "false"
      },
      ],
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
    let booksClone = this.state.books.slice()
    booksClone.splice(index, 1)
    this.setState({books: booksClone})
  }

  toggleShown = () => {
    this.setState({
      isShown: !this.state.isShown,
      addShown: !this.state.addShown
    })
  }

  toggleRead = (index) =>{
    let booksClone = this.state.books.slice()
    booksClone[index].read = booksClone[index].read == '✔' ? '❌' : '✔'
    this.setState({ books: booksClone })
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
    this.setState({
      books: booksClone,
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