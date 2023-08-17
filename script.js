const library = document.getElementById('library')
const add = document.getElementById('add')
const root = document.getElementById('root')
const cardForm = document.getElementById('cardForm')
const submit = document.getElementById('submit')
const close = document.getElementById('close')
const valueInput = document.getElementById('valueInput')
const minusElements = document.getElementsByClassName('minus')

const myLibrary = [];

function Book(value) {
    this.value = value;
}
function displayLibrary() {
library.innerHTML = '';
myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = book.value

    const minus = document.createElement('div');
    minus.classList.add('minus');
    minus.classList.add('icon');
    minus.innerHTML = '-';
    card.appendChild(minus);

    library.appendChild(card)

    minus.addEventListener('click', () => {
        card.remove();
    })

});
}

function addBookToLibrary() {
    const value = valueInput.value;
    const newBook = new Book(value);
    myLibrary.push(newBook);
    displayLibrary();
    hidePopUp();
}

function hidePopUp() {
    cardForm.style.display = 'none';
    library.style.filter = '';
}


add.addEventListener('click', () => {
    cardForm.style.display = 'flex'
    library.style.filter = 'blur(5px)'
})
submit.addEventListener('click', addBookToLibrary)
close.addEventListener('click', hidePopUp)



