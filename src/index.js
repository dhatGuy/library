import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Table from "./components/table"
import Form from "./components/form"

class App extends Component {
  constructor(props) {
    super (props);
    this.removeRow = this.removeRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
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
      }
    }
  }

  removeRow(index){
    let booksClone = this.state.books.slice()
    booksClone.splice(index, 1)
    this.setState({books: booksClone})
  }

  handleChange(e){
    const {value, name } = e.target
      this.setState(prevState => ({
        newBook: {
          ...prevState.newBook,
          [name]: value
        }
      }))
  }

  handleSubmit(e) {
    e.preventDefault()
    let booksClone = this.state.books.slice()
    booksClone.push({
      title: this.state.newBook.title,
      author: this.state.newBook.author,
      pages: this.state.newBook.pages,
      read: this.state.newBook.read == "yes" ? "true" : "false"
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
      <React.Fragment>
        <Header />
        <Table
        data={this.state.books}
        removeRow={this.removeRow}
        />
        <Form
        submitForm={this.handleSubmit}
        titleValue={this.state.newBook.title}
        authorValue={this.state.newBook.author}
        pagesValue={this.state.newBook.pages}
        handleChange={this.handleChange}
        read={this.state.newBook.read}
        />
      </React.Fragment>
    )
  }
}

 ReactDOM.render(<App/>, document.getElementById("main"));
