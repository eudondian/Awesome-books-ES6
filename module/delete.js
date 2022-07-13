// eslint-disable-next-line import/no-cycle
import { bookTable } from '../index.js';

const deleteFunction = () => {
  const deleteBtn = document.querySelector('#books-added');
  deleteBtn.addEventListener('click', (e) => {
    bookTable.deleteBook(e.target);
  });
};

export default deleteFunction;
