const myLibrary = [
    new Book("The secret history", "Donna Tartt", 622, true),
    new Book("Heartstopper", "Alice Oseman", 288, true),
    new Book("Returning to Haifa", "Ghassan Kanafani", 76, true),
    new Book("Confessions", "Kanae Minato", 240, true)
];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const libraryContainer = document.getElementById("libraryContainer");

function displayBooks() {
    myLibrary.forEach((book, index) =>displayCard(book, index, libraryContainer));
}
    
document.addEventListener("DOMContentLoaded", displayBooks);

function displayCard(book, index, container) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book_card");

        const title = document.createElement("h2");
        title.classList.add("book_title");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.classList.add("book_author");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.classList.add("book_pages");
        pages.textContent = `Pages: ${book.pages}`;

        const readStatusContainer = document.createElement("div");
        readStatusContainer.classList.add("read_container");

        const readStatusLabel = document.createElement("label");
        readStatusLabel.textContent = "Read:";

        const readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.checked = book.isRead;
        readCheckbox.addEventListener("click", () => toggleRead(index));

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove_btn");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeBook(index));

        readStatusContainer.appendChild(readStatusLabel);
        readStatusContainer.appendChild(readCheckbox);

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatusContainer);
        bookCard.appendChild(removeBtn);

        container.appendChild(bookCard);
    }

function removeBook(index, container) {
    myLibrary.splice(index, 1);
    container.innerHTML = "";
    displayBooks();
}

function addBook(book, container) {
    myLibrary.push(book);
    container.innerHTML = "";
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
}

const newBookBtn = document.getElementById("newBookBtn");
const formDialog = document.getElementById("formDialog");
const closeDialog = document.getElementById("closeDialog");

newBookBtn.addEventListener("click", () => {
    formDialog.showModal();
})

closeDialog.addEventListener("click", () => {
    formDialog.close();
})

document.getElementById("book_form").addEventListener("submit",
    function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const isRead = document.getElementById("isRead").checked;

        const newBook = new Book(title, author, pages, isRead);
        addBook(newBook, libraryContainer);

        document.getElementById("book_form").reset();
        formDialog.close();
    });