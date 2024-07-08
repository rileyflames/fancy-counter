const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

// increment counter
const incrementCounter = () => {
  const currentValue = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber + 1;
  //
  // check if new value if greater than 5
  if (newValue > 5) {
    // if it is, force it to be 5 instead
    newValue = 5;

    // give visual indicator that limit has been reached
    counterEl.classList.add("counter--limit");
    // update the counter title to say limit has been reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";
    // disable increment and decrement buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter elemt with new value
  counterValueEl.textContent = newValue;
};
const decerementCounter = () => {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber - 1;

  // check if new value is less than 0
  if (newValue < 0) {
    newValue = 0;
  }
  // set counter elemt with new value
  counterValueEl.textContent = newValue;
};
increaseButtonEl.addEventListener("click", incrementCounter);
decreaseButtonEl.addEventListener("click", decerementCounter);
resetButtonEl.addEventListener("click", () => {
  // set counter element value to 0
  counterValueEl.textContent = 0;
  //
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  //
  counterTitleEl.textContent = "Fancy counter";
  resetButtonEl.blur();
  //
  counterEl.classList.remove("counter--limit");
});
// for selecting the entire document and listening for any key stroke
// document.addEventListener("keydown", () => {
//   // get current value of counter
//   const currentValue = counterValueEl.textContent;

//   // convert value to number type
//   const currentValueAsNumber = +currentValue;

//   // increment by 1
//   const newValue = currentValueAsNumber + 1;
//   // set counter elemt with new value
//   counterValueEl.textContent = newValue;
// });
