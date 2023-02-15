const refForm = document.querySelector('form');
const refButton = document.querySelector('button');

//refForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  Promise.all(createPromises())
    .then(value => {
      console.log(value);
      // if (value.length > 0) {
      //   value.forEach(({ position, delay }) =>
      //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      //   );
      // }
    })
    .catch(value => {
      console.log(value);
      // if (value.length > 0) {
      //   value.forEach(({ position, delay }) =>
      //     console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      //   );
      // }
    });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;
    if (shouldResolve) {
      // Fulfill
      //setTimeout(resolve({ position, delay }), delay);
      //console.log(position, delay);
      //resolve({ position, delay });
      setTimeout(resolve({ position, delay }), delay);
    } else {
      // Reject
      //setTimeout(reject({ position, delay }), delay);
      //console.log(position, delay);
      //reject({ position, delay });
      setTimeout(reject({ position, delay }), delay);
    }
  });
}

function createPromises() {
  const arrayPromises = [];
  for (let i = 0; i < Number(refForm.amount.value); i += 1) {
    const currentDelay =
      Number(refForm.delay.value) + Number(refForm.step.value) * i;
    arrayPromises.push(createPromise(i + 1, currentDelay));
    console.log(arrayPromises);
  }
  console.log(arrayPromises);
  return arrayPromises;
}

//=============================
//=============================
// function createOnePromise(a, delay) {
//   return new Promise(resolve => {
//     setTimeout(resolve({ a, delay }), delay);
//     //resolve({ a, b });
//   });
// }
// let promise1 = createOnePromise(100, 1000);
// let promise2 = createOnePromise(200, 2000);
// let promise3 = createOnePromise(300, 3000);
// Promise.all([promise1, promise2, promise3]).then(value => console.log(value));

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));
