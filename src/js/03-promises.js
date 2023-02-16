import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

let totalTime = null;
const ref = {
  form: document.querySelector('form'),
  inputs: document.querySelectorAll('input'),
  button: document.querySelector('button'),
};

[...ref.inputs].forEach(item => (item.style.width = '100px'));

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    }
  });
}
ref.form.addEventListener('submit', createPromises);

function createPromises(event) {
  const firstDelay = Number(ref.form.delay.value);
  const stepDelay = Number(ref.form.step.value);
  const promisesAmount = Number(ref.form.amount.value);
  event.preventDefault();
  for (let i = 0; i < promisesAmount; i += 1) {
    let position = i + 1;
    let delay = firstDelay + stepDelay * i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    totalTime = firstDelay + stepDelay * promisesAmount + 2500;
  }
  makeDisableButtonCreatePromises(totalTime);
}

function makeDisableButtonCreatePromises(time) {
  ref.button.disabled = true;
  setTimeout(() => (ref.button.disabled = false), time);
}
