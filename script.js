// Modal Creation

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

function openModal() {
    modal.style.display = "block";
}
function openModal2() {
    modal2.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none";
    document.getElementById('errorText').style.display="None";
}
span2.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none";
    document.getElementById('errorText2').style.display="None";
}

window.onclick = function(event) {
    if (event.target == modal || event.target == modal2) {
      modal.style.display = "none";
      modal2.style.display = "none";
      document.getElementById('errorText2').style.display="None";
      document.getElementById('errorText').style.display="None";
    }
  } 

// Library Creation

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

// Click on card

 function reply_click(i) 
    {
        let number = i;

        modal2.style.display = "block";
        document.getElementById('popupTitle').value = myLibrary[i].title;
        document.getElementById('popupContent').value = myLibrary[i].author;
        document.getElementById('popupCurrent').value = myLibrary[i].completedPages;
        document.getElementById('popupTotal').value = myLibrary[i].totalPages;

        content = document.getElementById("popupChange");
        content.setAttribute("onclick", "bookUpdate(" + i + ")");
    }

// Creating a book

let i = 0;
function addBooktoLibrary() {
    if (document.getElementById("newTitle").value.length >= 1
    && document.getElementById("newAuthor").value.length >= 1
    && document.getElementById('newCurrentPage').value <= document.getElementById('newTotalPages').value
    && document.getElementById('newTotalPages').value >= 1
    && document.getElementById('newCurrentPage').value >= 1) {
        let title = document.getElementById("newTitle").value;
        let author = document.getElementById('newAuthor').value;
        let completedPages = document.getElementById('newCurrentPage').value;
        let totalPages = document.getElementById('newTotalPages').value;

        let book1 = new Book(title, author, completedPages, totalPages);
        myLibrary.push(book1);

        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.classList.add('flex-container');
        content.value = myLibrary[i];
        input = myLibrary[i];

        content.textContent = myLibrary[i].title;
        container.appendChild(content);

        content.setAttribute("onclick", "reply_click(" + i + ")");
        content.setAttribute("id", i);
        
        const container2 = document.querySelectorAll('.flex-container')[i];
        const content2 = document.createElement('p');
        content2.classList.add('info-box');
        content2.textContent = myLibrary[i].author;
        container2.appendChild(content2);

        const container3 = document.querySelectorAll('.flex-container')[i];
        const content3 = document.createElement('p');
            if (Number(completedPages) >= Number(totalPages)) {
                content3.classList.add('color-code');
            }
            else if (Number(completedPages) == 0)
                content3.classList.add('incomplete-color-code');
            else {
                content3.classList.add('inprogress-color-code');
            }
        content3.textContent = "";
        container3.appendChild(content3);

        document.getElementById('noBooks').style.display="None";
        document.getElementById('noBooks2').style.display="None";
        document.getElementById('errorText').style.display="None";

        i++; 

        // book1.sayBook();
        modal.style.display = "none";
        document.getElementById('errorText').style.display="None";
    }

    // Check to see user inputs are valid

    else {

        let w = Number(document.getElementById('newCurrentPage').value)
        let v = Number(document.getElementById('newTotalPages').value)
        if (v > w || v,w < 0 || v == 0) {
            document.getElementById('errorText').style.display="Block";
            document.getElementById('errorText').innerHTML = "Error: Invalid page number(s)"
        }
        else {
            document.getElementById('errorText').style.display="Block";
            document.getElementById('errorText').innerHTML = "Error: Invalid text"            
        }

    }
}

// Completed checkboxes

document.getElementById('completeCheckbox').addEventListener('change', function(e) {
    if (this.checked) {
        document.getElementById('newCurrentPage').value = Math.max(document.getElementById('newTotalPages').value,document.getElementById('newCurrentPage').value);
        document.getElementById('newTotalPages').value = Math.max(document.getElementById('newTotalPages').value,document.getElementById('newCurrentPage').value);
    }
})

document.getElementById('completeCheckbox2').addEventListener('change', function(e) {
    if (this.checked) {
        document.getElementById('popupCurrent').value = Math.max(document.getElementById('popupTotal').value,document.getElementById('popupCurrent').value);
        document.getElementById('popupTotal').value = Math.max(document.getElementById('popupTotal').value,document.getElementById('popupCurrent').value);
    }
})

// Making updates to library 

function bookUpdate(i) {

    s = Number(document.getElementById('popupCurrent').value);
    t =  Number(document.getElementById('popupTotal').value)

    if (document.getElementById('popupTitle').value.length >= 1
    &&  document.getElementById('popupContent').value.length >= 1
    && s <= t
    && t >= 1
    && t >= 1) {


        var test = document.getElementById(i);
        test.removeChild(test.childNodes[0]);
        test.removeChild(test.childNodes[0]);
        test.removeChild(test.childNodes[0]);
        test.append(document.getElementById('popupTitle').value);
        

        const container2 = document.querySelectorAll('.flex-container')[i];
        const content2 = document.createElement('p');
        content2.classList.add('info-box');
        content2.textContent = myLibrary[i].author;
        container2.appendChild(content2);

        const container3 = document.querySelectorAll('.flex-container')[i];
        const content3 = document.createElement('p');
            if (Number(document.getElementById('popupCurrent').value) >= Number(document.getElementById('popupTotal').value)) {
                content3.classList.add('color-code');
            }
            else if (document.getElementById('popupCurrent').value == 0)
                content3.classList.add('incomplete-color-code');
            else {
                content3.classList.add('inprogress-color-code');
            }
        content3.textContent = "";
        container3.appendChild(content3);

    
        myLibrary[i].title = document.getElementById('popupTitle').value;
        myLibrary[i].author = document.getElementById('popupContent').value;
        myLibrary[i].completedPages = document.getElementById('popupCurrent').value;
        myLibrary[i].totalPages = document.getElementById('popupTotal').value;
        modal2.style.display = "none";
        document.getElementById('errorText2').style.display="None";
    }

    // Check to see user inputs are valid

    else {
        let w = Number(document.getElementById('popupCurrent').value);
        let v = Number(document.getElementById('popupTotal').value);
        if (v > w || v,w < 0 || v == 0) {
            document.getElementById('errorText2').style.display="Block";
            document.getElementById('errorText2').innerHTML = "Error: Invalid page number(s)"
        }
        else {
            document.getElementById('errorText2').style.display="Block";
            document.getElementById('errorText2').innerHTML = "Error: Invalid text"            
        }

    }
}







