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
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
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
}
span2.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal || event.target == modal2) {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
  } 



 function reply_click(i) 
    {
        let number = i;
        console.log(myLibrary[i].title);
        modal2.style.display = "block";
        document.getElementById('popupTitle').value = myLibrary[i].title;
        document.getElementById('popupContent').value = myLibrary[i].author;
        document.getElementById('popupCurrent').value = myLibrary[i].completedPages;
        document.getElementById('popupTotal').value = myLibrary[i].totalPages;
        document.getElementById('popupNumber').innerHTML = number;
        
        //alert(document.querySelectorAll('flex-container')[0]).innerHTML;
    }

function bookUpdate() {
    popupNumber = document.getElementById('popupNumber').innerHTML;
    myLibrary[popupNumber].title = document.getElementById('popupTitle').value;
}


let i = 0;
function addBooktoLibrary() {
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



    //document.getElementById("card").innerHTML +=  myLibrary[i].title;
    i++; 

    // book1.sayBook();
    modal.style.display = "none";

    }


document.getElementById('completeCheckbox').addEventListener('change', function(e) {
    console.log("sd");
    if (this.checked) {
        document.getElementById('newCurrentPage').value = Math.max(document.getElementById('newTotalPages').value,document.getElementById('newCurrentPage').value);
        document.getElementById('newTotalPages').value = Math.max(document.getElementById('newTotalPages').value,document.getElementById('newCurrentPage').value);
    }
})

document.getElementById('popupChange').addEventListener('click', function(e) {

        var test = document.getElementById('0');
        test.append('tester')
        modal2.style.display = "none";
       
    }
)






