function storeBooks() {
  let books;
  if (localStorage.getItem('library') === null) {
    books = [{
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      pages: 442,
      read: "true"
    }]
    localStorage.setItem("library", JSON.stringify(books));
  } else {
    books = JSON.parse(localStorage.getItem('library'));
  }
  return books;
}

export default storeBooks;