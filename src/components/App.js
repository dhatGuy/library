import React, { Component } from "react";
import Header from "./header";
import Table from "./table"
import Form from "./form"

class App extends Component {
  constructor(props) {
    super (props);
    this.removeRow = this.removeRow.bind(this);
    this.toggleRead = this.toggleRead.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      books: [
      //   {
      //   title: "Lord of the Rings",
      //   author: "J.R.R. Tolkien",
      //   pages: 442,
      //   read: "true"
      // },
      // {
      //   title: "Lord of the Rings",
      //   author: "J.R.R. Tolkien",
      //   pages: 442,
      //   read: "false"
      // },
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

  toggleRead(index){
    let booksClone = this.state.books.slice()
    console.log(booksClone[index])
    booksClone[index].read = booksClone[index].read == '✔' ? '❌' : '✔'
    this.setState({ books: booksClone })
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
      <React.Fragment>
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
        />
      </React.Fragment>
    )
  }
}

export default App