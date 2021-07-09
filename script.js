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
let i = 0;
function addBooktoLibrary() {
    let title = document.getElementById("newTitle").value;
    console.log(title)
    let author = document.getElementById('newAuthor').value;
    let completedPages = document.getElementById('newCurrentPage').value;
    let totalPages = document.getElementById('newTotalPages').value;

    let book1 = new Book(title, author, completedPages, totalPages);
    myLibrary.push(book1);


    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('flex-container');
    content.textContent = myLibrary[i].title;
    container.appendChild(content);


    const container2 = document.querySelector('.flex-container');
    const content2 = document.createElement('p');
    content2.classList.add('info-box');
    content2.textContent = myLibrary[i].author;
    container2.appendChild(content2);



    //document.getElementById("card").innerHTML +=  myLibrary[i].title;
    i++; 
    // book1.sayBook();
    modal.style.display = "none";
}



