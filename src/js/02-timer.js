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
let timerID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  //minDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    this.defaultDate = new Date();
    setupTimerHTML();
    clearInterval(timerID);
  },
  onClose(selectedDates) {
    chosenTime = new Date(selectedDates[0]).getTime();
    checkingInputTime();
  },
};

flatpickr('#datetime-picker', options);
ref.buttonStart.addEventListener('click', showCountDownPeriodOfTime);
function showCountDownPeriodOfTime(event) {
  if (checkingInputTime() <= 0) return;
  timerID = setInterval(periodOfTimeCalculation, 1000);
}
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
  setupTimerHTML(timeInfo);
}
function setupTimerHTML(object = {}) {
  ref.showDays.textContent = object.days ?? '00';
  ref.showHours.textContent = object.hours ?? '00';
  ref.showMinutes.textContent = object.minutes ?? '00';
  ref.showSeconds.textContent = object.seconds ?? '00';
}
function checkingInputTime() {
  const currentTime = Date.now();
  const currentPeriodOfTime = chosenTime - currentTime;
  showWarningMessage(currentPeriodOfTime);
  return currentPeriodOfTime;
}
function showWarningMessage(currentPeriodOfTime) {
  if (currentPeriodOfTime >= 0) {
    ref.buttonStart.disabled = false;
    return;
  }
  Notiflix.Report.failure(
    'Warning',
    'Please choose a date in the future',
    'OK',
    {
      width: '260px',
      svgSize: '50px',
    }
  );
  ref.buttonStart.disabled = true;
}
