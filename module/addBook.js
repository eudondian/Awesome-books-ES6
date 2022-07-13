import Book from './book.js';
// eslint-disable-next-line import/no-cycle
import { bookTable, Store } from '../index.js';

const addBookFunction = () => {
  const bookForm = document.querySelector('#book-form');
  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get The form value
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    // Validation
    if (title === '' || author === '') {
      bookTable.showAlert();
    } else {
      const book = new Book(title, author);

      // Add A Book to the List
      bookTable.addBookToTable(book);

      // Add books to Local Storage
      Store.addBook(book);

      // Clear fields on Submission
      bookTable.blankFieldsAgain();
    }
  });
};

export default addBookFunction;
