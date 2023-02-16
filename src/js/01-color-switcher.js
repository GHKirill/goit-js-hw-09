const ref = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
};
ref.buttonStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerID = null;
ref.buttonStart.addEventListener('click', onButtonStartClick);
ref.buttonStop.addEventListener('click', onButtonStopClick);

function onButtonStartClick(event) {
  timerID = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  ref.buttonStop.disabled = false;
  ref.buttonStart.disabled = true;
}
function onButtonStopClick(event) {
  clearInterval(timerID);
  ref.buttonStart.disabled = false;
  ref.buttonStop.disabled = true;
  //document.body.style.backgroundColor = '#fff';
}
