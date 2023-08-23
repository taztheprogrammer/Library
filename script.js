const library = document.getElementById('library')
const add = document.getElementById('add')
const root = document.getElementById('root')
const cardForm = document.getElementById('cardForm')
const submit = document.getElementById('submit')
const close = document.getElementById('close')

const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const numberInput = document.getElementById('numberInput')
const radioYes = document.getElementById('radio-yes')
const radioNo = document.getElementById('radio-no')

const minusElements = document.getElementsByClassName('minus')

const myLibrary = [];

function Book(title, author, didRead, pageNum) {
    this.title = title;
    this.author = author;
    this.didRead = didRead;
    this.pageNum = pageNum;
}

function displayLibrary() {

library.innerHTML = '';

myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');


    const titleSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const pagesSpan = document.createElement('span');
    const readSpan = document.createElement('span');

    titleSpan.id = 'Title';
    titleSpan.textContent = book.title;
    card.appendChild(titleSpan);

    authorSpan.id = 'Author';
    authorSpan.textContent = book.author;
    card.appendChild(authorSpan);

    pagesSpan.id = 'Pages';
    pagesSpan.textContent = book.pageNum + " pages";
    card.appendChild(pagesSpan);

    readSpan.id = 'read';
    readSpan.textContent = book.didRead ? "Read" : "Not Read";
    card.appendChild(readSpan);


    const minus = document.createElement('div');
    minus.classList.add('minus');
    minus.classList.add('icon');
    minus.innerHTML = '-';
    card.appendChild(minus);

    library.appendChild(card)

    minus.addEventListener('click', () => {
        card.remove();
        myLibrary.pop(card);
    })

});
}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    
    let readBoolean

    if (radioYes.checked) {
        readBoolean = true;
    } else {
        readBoolean = false
    }

    const newBook = new Book(titleInput.value, authorInput.value, readBoolean, numberInput.value)
    myLibrary.push(newBook);
    displayLibrary();
    hidePopUp();
})

function hidePopUp() {
    cardForm.style.display = 'none';
    library.style.filter = '';
    titleInput.value = '';
  authorInput.value = '';
  numberInput.value = '';
  radioYes.checked = false;
  radioNo.checked = false;
}


add.addEventListener('click', () => {
    cardForm.style.display = 'flex'
    library.style.filter = 'blur(5px)'
})


close.addEventListener('click', hidePopUp)



