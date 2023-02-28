import { dateCulc } from './dateCalc.js'
import { timer } from './timer.js'
const dateForm = document.getElementById('dateCalc');
const timerForm = document.getElementById('timer');

export const changeMode = () => {
  timerForm.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let timerNumber = +formData.get('timerNumber');
    timer(timerNumber);
  }

  dateForm.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let firstDate = formData.get('firstDate');
    let secondDate = formData.get('secondDate');
    dateCulc(firstDate, secondDate);
  }
}
