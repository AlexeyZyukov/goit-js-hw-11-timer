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
//   selector: "timer-2",
//   targetDate: new Date("December 18, 2021"),
// });
//======================================================

class CountdownTimer { //===Вариант 2 ===
  constructor(selector, targetDate) {
    this.intervalId = null;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  // setInt = setInterval(() => {
  intervalId = setInterval(() => {
    const nowDate = Date.now();

    console.log(this.targetDate);

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

  // set targetDate(newTargetDate) {
  //   this.targetDate = newTargetDate;
  // }
};

const newTargerDate1 = `october 18, 2022`;
new CountdownTimer("timer-1", newTargerDate1);
// console.dir(timer1);


// const newTargerDate2 = `october 18, 2023`;
// const timer2 = new CountdownTimer("timer-2", newTargerDate2);
// console.dir(timer2);



// refs.dateInput.addEventListener('input', debounce(renderCounter, 3000));

// function renderCounter(event) {
//   // event.preventDefault;
//   let newTargetDate = "";

//   if (refs.dateInput.value !== event.target.value) {
//     console.log(refs.dateInput.value);
//     clearContent();
//     newTargetDate = event.target.value;
//     console.log(newTargetDate);
//   }
//   newTargetDate = event.target.value;
//   console.log(newTargetDate);

//   const timer1 = new CountdownTimer("timer-1", newTargetDate);
//   console.log(newTargetDate);
//   return timer1;
// };

// function clearContent() {
//   refs.dateInput.value = "";
//   CountdownTimer.this.TargetDate = "";
//   console.log(CountdownTimer.TargetDate);
//   refs.clockFaceDays.textContent = "";
//   refs.clockFaceHours.textContent = "";
//   refs.clockFaceMinutes.textContent = "";
//   refs.clockFaceSecond.textContent = ";"
// }

// console.log(CountdownTimer.targetDate);