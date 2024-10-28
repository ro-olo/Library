const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook(book) {
    myLibrary.push(book);
}

//funzione per iterare l'array e creare un elemento per ogni libro nel DOM
//i libri devono essere visti come cards
//sistemare l'index nella card non nel form

const libraryContainer = document.getElementById("libraryContainer");

function displayBooks() {
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book_card");

        const title = document.createElement("h2");
        title.classList.add("book_title");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.classList.add("book_author");
        author.textContent = "Author: ${book.author}";

        const pages = document.createElement("p");
        pages.classList.add("book_pages");
        pages.textContent = "Pages: ${book.pages}";

        const isRead = document.createElement("p");
        isRead.classList.add("book_isRead");
        isRead.textContent = "Read: ${book.isRead ? 'Yes' : 'No'}";
    })
}

//form

const newBookBtn = document.getElementById("newBookBtn");
const formDialog = document.getElementById("formDialog");
const closeDialog = document.getElementById("closeDialog");

newBookBtn.addEventListener("click", () => {
    formDialog.showModal();
})

closeDialog.addEventListener("click", () => {
    formDialog.close();
})

//event.preventDefault()