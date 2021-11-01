const refs = {
  clockFaceDays: document.querySelector('.value[data-value="days"]'),
  clockFaceHours: document.querySelector('.value[data-value="hours"]'),
  clockFaceMinutes: document.querySelector('.value[data-value="mins"]'),
  clockFaceSecond: document.querySelector('.value[data-value="secs"]'),
  dateInput: document.querySelector('#date')
};
const debounce = require('lodash.debounce');

//===Вариант 1 =======
// class CountdownTimer {
//   constructor({ selector, targetDate } = {}) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }

//   setInt = setInterval(() => {
//     const nowDate = Date.now();
//     const deltaTime = this.targetDate - nowDate;
//     this.updateClockface(deltaTime);
//     this.timeFinish(deltaTime);
//   }, 1000);

//   updateClockface(deltaTime) {
//     const clockFaceDays = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
//     const clockFaceHours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const clockFaceMinutes = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
//     const clockFaceSecond = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
//     refs.clockFaceDays.textContent = `${clockFaceDays}`;
//     refs.clockFaceHours.textContent = `${clockFaceHours}`;
//     refs.clockFaceMinutes.textContent = `${clockFaceMinutes}`;
//     refs.clockFaceSecond.textContent = `${clockFaceSecond}`;
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }

//   timeFinish(value) { //value - принимает значение deltaTime при вызове setInt
//     if (value < 0) {
//       clearInterval(this.setInt);
//       const clockFace = document.getElementById(this.selector);
//       clockFace.textContent = "Time expired";
//     }
//   }
// };

// new CountdownTimer({
//   selector: "timer-1",
//   targetDate: new Date("December 18, 2021"),
// });
//======================================================

class CountdownTimer { //===Вариант 2 ===
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const finDate = new Date(this.targetDate); //преобразование даты в миллисекунды
    const deltaTime = finDate - nowDate;
    this.updateClockface(deltaTime);
    this.timeFinish(deltaTime);
  }, 1000);

  updateClockface(deltaTime) {
    const clockFaceDays = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const clockFaceHours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const clockFaceMinutes = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    const clockFaceSecond = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    refs.clockFaceDays.textContent = `${clockFaceDays}`;
    refs.clockFaceHours.textContent = `${clockFaceHours}`;
    refs.clockFaceMinutes.textContent = `${clockFaceMinutes}`;
    refs.clockFaceSecond.textContent = `${clockFaceSecond}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  timeFinish(value) { //value - принимает значение deltaTime при вызове в setInt
    if (value < 0) {
      const clockFace = document.getElementById(this.selector);
      clearInterval(this.setInt);
      clockFace.textContent = "Time expired";

    }
  }
};


// const newTargerDate = `october 18, 2022`;
// const timer1 = new CountdownTimer("timer-1", newTargerDate);

refs.dateInput.addEventListener('input', debounce(renderCounter, 5000));

function renderCounter(event) {
  // event.preventDefault;
  let newTargetDate = event.target.value;
  console.log(newTargetDate);
  if (refs.dateInput.value !== event.target.value) {
    console.log(refs.dateInput.value);
    clearContent();
    newTargetDate = event.target.value;
    console.log(newTargetDate);
  }
  // newTargetDate = refs.dateInput.value;


  const timer1 = new CountdownTimer("timer-1", newTargetDate);
  console.log(newTargetDate);
  return timer1;
};

function clearContent() {
  refs.dateInput.value = "";
}