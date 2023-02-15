import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import '../css/timer.css';

const ref = {
  buttonStart: document.querySelector('[data-start]'),
  chosenTimeInput: document.querySelector('#datetime-picker'),
  showDays: document.querySelector('[data-days'),
  showHours: document.querySelector('[data-hours]'),
  showMinutes: document.querySelector('[data-minutes]'),
  showSeconds: document.querySelector('[data-seconds]'),
};

let chosenTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  //minDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let currentTime = Date.now();
    chosenTime = new Date(selectedDates[0]).getTime();
    if (currentTime >= chosenTime) {
      Notiflix.Report.failure(
        'Warning',
        'Please choose a date in the future',
        'OK'
      ),
        {
          width: '360px',
          svgSize: '120px',
        };
      //alert('Please choose a date in the future');
      ref.buttonStart.disabled = true;
    } else {
      ref.buttonStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padInfoTime(Math.floor(ms / day));
  // Remaining hours
  const hours = padInfoTime(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padInfoTime(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padInfoTime(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
function padInfoTime(number) {
  return String(number).padStart(2, 0);
}

function periodOfTimeCalculation() {
  const currentTime = Date.now();
  const currentPeriodOfTime = chosenTime - currentTime;
  const timeInfo = convertMs(currentPeriodOfTime);
  insertCalculatingPeriodToHTML(timeInfo);
}

function insertCalculatingPeriodToHTML({ days, hours, minutes, seconds }) {
  ref.showDays.textContent = days;
  ref.showHours.textContent = hours;
  ref.showMinutes.textContent = minutes;
  ref.showSeconds.textContent = seconds;
}

ref.buttonStart.addEventListener('click', showCountDownPeriodOfTime);

function showCountDownPeriodOfTime(event) {
  const timerID = setInterval(periodOfTimeCalculation, 1000);
  ref.buttonStart.removeEventListener('click', showCountDownPeriodOfTime);
}
