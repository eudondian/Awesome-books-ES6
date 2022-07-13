import { DateTime } from '../luxon.js';

const currentTime = DateTime.now();

const setDate = () => {
  const displayTime = document.querySelector('.time');
  displayTime.innerHTML = `${currentTime.toLocaleString(DateTime.DATETIME_MED)}`;
};

export default setDate;
