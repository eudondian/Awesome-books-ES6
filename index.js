// eslint-disable-next-line import/no-cycle, max-classes-per-file
import addBookFunction from './module/addBook.js';
// import Book from './module/book.js';
// eslint-disable-next-line import/no-cycle
import deleteFunction from './module/delete.js';
import setDate from './module/dateTime.js';

setDate();
// Local Storage

export class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export class bookTable {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => bookTable.addBookToTable(book));
  }

  static addBookToTable(book) {
    const bookList = document.querySelector('#books-added');

    const tableRow = document.createElement('tr');
    tableRow.className = 'table-row';

    tableRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>            
            <button class='delete-btn'><a href='#'></a>Delete</button>
    
        `;

    bookList.appendChild(tableRow);
  }

  static deleteBook(target) {
    if (target.classList.contains('delete-btn')) {
      target.parentElement.remove();
    }
  }

  static showAlert() {
    const container = document.querySelector('.container');
    const alert = document.querySelector('.alert');

    alert.innerText = 'Please Provide an Author';

    container.appendChild(alert);

    // Remove Alert after 2 seconds
    setTimeout(() => alert.remove(), 2000);
  }

  static blankFieldsAgain() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Show Books
document.addEventListener('DOMContentLoaded', bookTable.displayBooks);

//  Add a Book
addBookFunction();

// Remove from a Book
deleteFunction();
