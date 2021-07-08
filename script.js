let myLibrary = [];

function Book(title, author, completedPages, totalPages) {
    this.title = title;
    this.author = author;
    this.completedPages = completedPages;
    this.totalPages = totalPages;
    this.sayBook = function() {
        console.log(title + ' ' + author)
    }
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 

function addBooktoLibrary() {
    let title = document.getElementById("newTitle").value;
    console.log(title)
    let author = document.getElementById('newAuthor');
    let completedPages = document.getElementById('newCurrentPage');
    let totalPages = document.getElementById('newTotalPages');
    const  book1  = new Book(title, author, completedPages, totalPages);
    // book1.sayBook();
    myLibrary += book1;
    document.getElementById("books").innerHTML = myLibrary;

    modal.style.display = "none";
}