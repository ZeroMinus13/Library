let myLibrary = [];
class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function display(myLibrary) {
  let div = document.createElement('div');
  let btnRemove = document.createElement('button');
  btnRemove.className = 'btnRemove';
  btnRemove.innerText = 'Remove Book';
  div.className = 'card';
  books.appendChild(div);
  let nametxt = document.createElement('div');
  let authortxt = document.createElement('div');
  let pagestxt = document.createElement('div');
  let readbtn = document.createElement('button');
  readbtn.innerText = 'Read';
  readbtn.className = 'readbtn';
  for (library of myLibrary)
    div.appendChild(nametxt).innerText = 'Title: ' + library.name;
  div.appendChild(authortxt).innerText = 'Author: ' + library.author;
  div.appendChild(pagestxt).innerText = 'Pages: ' + library.pages;
  div.appendChild(readbtn).innerText = library.read;
  div.appendChild(btnRemove);
  btnRemove.addEventListener('click', removeBook);
  function removeBook() {
    div.remove();
  }
  readbtn.addEventListener('click', readBook);
  function readBook() {
    if (readbtn.innerText === 'Read') {
      readbtn.innerText = 'Not Read';
    } else if (readbtn.innerText === 'Not Read') {
      readbtn.innerText = 'Read';
    }
  }
}

function addBookToLibrary() {
  // let form = document.getElementById('form').style.display = "none"
  let name = document.getElementById('name').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let e = document.getElementById('read');
  let read = e.options[e.selectedIndex].text;
  let mybook = new Book(name, author, pages, read);
  if (name == '' || author == '' || pages == '') return;
  myLibrary.push(mybook);
  display(myLibrary);
  let form = document.getElementsByClassName('form')[0].reset();
}

function toggle() {
  let form = document.getElementsByClassName('form');
  form[0].classList.toggle('display');
}
function removeBook() {
  this.remove();
  console.log(this);
}
let btnAddform = document.getElementById('addBook');
let btnAddtoBook = document.getElementById('add');

btnAddtoBook.addEventListener('click', addBookToLibrary);
btnAddform.addEventListener('click', toggle);

(function validation() {
  let author = document.getElementById('author');
  let name = document.getElementById('name');
  let form = document.getElementById('form');

  name.addEventListener('input', () => {
    name.setCustomValidity('');
    name.checkValidity();
  });
  name.addEventListener('invalid', () => {
    if (author.value === '');
    name.setCustomValidity('Title required!');
  });
  author.addEventListener('input', () => {
    author.setCustomValidity('');
    author.checkValidity();
  });
  author.addEventListener('invalid', () => {
    if (author.value === '');
    author.setCustomValidity('Author required!');
  });

  document.querySelectorAll('input').forEach(function (element) {
    element.addEventListener('blur', function () {
      if (this.checkValidity()) this.classList.remove('error');
      else this.classList.add('error');
    });
  });
})();
