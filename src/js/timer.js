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
        const endDate = new Date("August 18, 2021 00:00:00").getTime();
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