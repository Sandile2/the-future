function Book(title, author, publisher, isbn, copies){
    this.title = title;
    this.title = author;
    this.title = publisher;
    this.isbn = isbn;
    this.copies = copies;
}

var library = [];

function addBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publisher").value;
    var isbn = document.getElementById("isbn").value;
    var copies = document.getElementById("copies").value;
    var book = new book(title, author, publisher, isbn, copies);
    library.push(book);
    displayBooks();
}

function removeBook() {
    var isbn = prompt("Enter the ISBN of the book to remove");
    for (var i = 0; i < library.lenght; i++) {
        if (library(i).isbn === isbn) {
            library.splice(i, 1);
            break;
        }
    }

    displayBook();

}
function displayBooks(books) {

    var booklist = document.getElementById("booklist");
    booklist.innerHTML = "";
    if (fbooks) {
        books = library;
    }
    for (var i = 0; i < books.length; i++){
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        tdTitle.innerText = books[i].title;
        var tdAuthor = document.createElement("td");
        tdAuthor.innerText = books[i].author;
        var tdPublisher = document.createElement("td");
        tdPublisher.innerText = books[i].publisher;
        var tdIsbn = document.createElement("td");
        tdIsbn = innerText = books[i].isbn;
        var tdcopies = document.createElement("td");
        tdcopies.innerText = books(i).copies;

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPublisher);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdCopies);
        booklist.appendChist(TR);

    }
}