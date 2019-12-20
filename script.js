let myLibrary = storeBooks()

// function constructor for the book
function Book(title, author, pages, read = true) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? "✔" : "❌"
}

// add book to library from user's input
function addBookToLibrary() {
    let title = document.querySelector('[data-name=title]').value;
    let author = document.querySelector('[data-name=author]').value;
    let pages = document.querySelector('[data-name=page]').value;
    let read = document.querySelector('[data-name=read]').checked;

    myLibrary.push(new Book(title, author, pages, read))
    localStorage.setItem('library', JSON.stringify(myLibrary))
}

// clear field after submitting a new book
function clearFields() {
    document.querySelector('[data-name=title]').value = "";
    document.querySelector('[data-name=author]').value = "";
    document.querySelector('[data-name=page]').value = "";
    document.querySelector('[data-name=read]').checked;
}

// add the book details to the DOM
function render() {
    const list = document.querySelector('.bookList');
    let row;
    for (var book of myLibrary) {
        row = document.createElement('tr')
        row.innerHTML =
            `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td class="read-status">${book.read}</td>
        <td><button class="delete">Delete</button></td>
        `
        list.appendChild(row)
    }
}

// event listener to display book details on add button
document.querySelector('form').addEventListener('submit', (e) => {
    const title = document.querySelector('[data-name=title]').value;
    const author = document.querySelector('[data-name=author]').value;
    const pages = document.querySelector('[data-name=page]').value;

    if (title == "" || author == "" || pages == "") {
        alert('Fill in the empty spaces')
    } else {
        document.querySelector('.bookList').innerHTML = ''
        addBookToLibrary();
        render();
        clearFields();
    }
    e.preventDefault();
});

// remove a book
document.querySelector('.bookList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
        removebook(e.target.parentElement.parentElement.children[0].textContent)
    }
})

//load existing books upon opening the page
document.addEventListener('DOMContentLoaded', render);

// show add book form
let openForm = () => {
    document.querySelector('.add').addEventListener('click', (e) => {
        let form = document.querySelector('form');
        form.style.display = 'block'
        document.querySelector('.add').style.display = 'none';
        document.querySelector('[data-name=title]').focus()
    })
}

// close add book form
let closeForm = () => {
    document.querySelector('.fa-times').addEventListener("click", () => {
        let form = document.querySelector('form');
        form.style.display = 'none'
        document.querySelector('.add').style.display = 'block';
    })
}

// change status of read
let changeRead = () => {
    document.querySelector('.bookList').addEventListener('click', (e) => {
        if (e.target.className == "read-status") {
            if (e.target.textContent == '✔') {
                e.target.textContent = "❌"
            } else {
                e.target.textContent = "✔"
            }
        }
    })
}

openForm()
closeForm()
changeRead()


function storeBooks() {
    let books;
    if (localStorage.getItem('library') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('library'))
    }
    return books
}

// remove book
function removebook(title) {
    const book = document.querySelector('.bookList');
    const library = JSON.parse(localStorage.getItem('library'))

    library.forEach((book, index) => {
        // console.log(index, book.title)
        if (book.title == title) {
            library.splice(index, 1)
        }
        localStorage.setItem('library', JSON.stringify(library))
    })
}

