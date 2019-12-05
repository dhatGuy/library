console.clear();
let myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
];

let deleteBtn = document.querySelector('.delete');

function Book(title, author, pages, read = true) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? "Read" : "Not read"
}
// Book.prototype.info = function () {
    //   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    // }
    
    function addBookToLibrary() {
        let title = document.querySelector('[data-name=title]').value;
        let author = document.querySelector('[data-name=author]').value;
        let pages = document.querySelector('[data-name=page]').value;
        let read = document.querySelector('[data-name=read]').checked;
        
        myLibrary.push(new Book(title, author, pages, read))
    }

function clearFields() {
    document.querySelector('[data-name=title]').value = "";
    document.querySelector('[data-name=author]').value = "";
    document.querySelector('[data-name=page]').value = "";
    document.querySelector('[data-name=read]').checked = false;
}

function render() {
    const list = document.querySelector('.bookList');
    const row = document.createElement('tr');
    myLibrary.forEach(books => {
        row.innerHTML =
        `
        <td>${books.title}</td>
        <td>${books.author}</td>
        <td>${books.pages}</td>
        <td>${books.read}</td>
        <td class="delete">X</td>
        `
    });
    list.appendChild(row)
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
    let title = document.querySelector('[data-name=title]').value;
    let author = document.querySelector('[data-name=author]').value;
    let pages = document.querySelector('[data-name=page]').value;
    
    if (title == "" || author == "" || pages == "") {
        alert('Fill in the empty spaces')
    } else {
        addBookToLibrary();
        render();
        clearFields();
    }
    e.preventDefault();
});
document.querySelector('.bookList').addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        console.log(e.target.parentElement)
    }
})

document.addEventListener('DOMContentLoaded', render);
