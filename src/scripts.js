import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

var dateControl = document.querySelector('input[type="date"]');
dateControl.value;
console.log(dateControl.value);
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)

import {getBookingsData, getCustomersData, getRoomsData} from './apiCalls'


fetchAllData() {
  return Promise.all([getBookingsData(), getCustomersData(), getRoomsData()])
  .then(data => allData(data))
  .catch(error => displayError(error))
}

// function allData(data) {
//
// }
//
// function displayError(error) {
//
// }
