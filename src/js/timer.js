"use strict"

const clockFace = document.querySelector("#timer-1");
const clockFaceDays = document.querySelector('span[data-value="days"]');
const clockFaceHours = document.querySelector('span[data-value="hours"]');
const clockFaceMinutes = document.querySelector('span[data-value="mins"]');
const clockFaceSecond = document.querySelector('span[data-value="secs"]');
const intervalId = null;

//console.log(clockFaceDays);


function timerCount() {
    setInterval((countDown), 1000);
};

function countDown() {
        const endDate = new Date("August 18, 2022 00:00:00").getTime();
        const currentDate = Date.now();
        const deltaTime = endDate - currentDate;
    //console.log(deltaTime);
    clockFaceDays.textContent = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    clockFaceHours.textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    clockFaceMinutes.textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    clockFaceSecond.textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    //console.log( 'clockFaceDays', clockFaceDays);
    //console.log('clockFaceHours', clockFaceHours);
    //console.log('clockFaceMinutes', clockFaceMinutes);
    //console.log('clockFaceSecond', clockFaceSecond);
};

function pad(value) {
    return String(value).padStart(2, '0');
  }
timerCount();

// const timer = {
//     intervalId: null,

//     countDown() {
//         const endDate = new Date("August 15, 2022 14:00:00").getTime();
//         const currentDate = Date.now();
//         const deltaTime = endDate - currentDate;
//         console.log(deltaTime);
//     }
// };
//==================================================================
//вариант коллеги
// const refs = {
//      clockFaceDays: document.querySelector('.value[data-value="days"]'),
//      clockFaceHours : document.querySelector('.value[data-value="hours"]'),
//      clockFaceMinutes : document.querySelector('.value[data-value="mins"]'),
//      clockFaceSecond : document.querySelector('.value[data-value="secs"]'),
//      clockFace : document.getElementById("timer-1"),
//   };
//   class CountdownTimer {
//     constructor({ selector, targetDate }) {
//       this.selector = selector;
//       this.targetDate = targetDate;
//     }
//     setInt = setInterval(() => {
//       const nowDate = Date.now();
//       const time = this.targetDate - nowDate;
//       this.updateClockface(time);
//       this.timeFinish(time);
//     }, 1000);
//     updateClockface(time) {
//       const clockFaceDays = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//       const clockFaceHours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//       const clockFaceMinutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//       const clockFaceSecond = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//       refs.clockFaceDays.textContent = `${clockFaceDays}`;
//       refs.clockFaceHours.textContent = `${clockFaceHours}`;
//       refs.clockFaceMinutes.textContent = `${clockFaceMinutes}`;
//       refs.clockFaceSecond.textContent = `${clockFaceSecond}`;
//     }
//     pad(value) {
//       return String(value).padStart(2, "0");
//     }
//     timeFinish(time) {
//       if (time < 0) {
//         clearInterval(this.setInt);
//         refs. clockFace .textContent = "Finish";
//       }
//     }
//   };
//   new CountdownTimer({
//     selector: "#timer-1",
//     targetDate: new Date("August 18, 2021"),
//   });

//======================================================

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);
//     this.secRef.textContent = secs < 10 ? `0${secs}` : secs;
//     this.minRef.textContent = mins < 10 ? `0${mins}`: mins;
//     this.hourRef.textContent = hours < 10 ? `0${hours}` : hours;
//     this.dayRef.textContent = days < 10 ? `0${days}` : days;