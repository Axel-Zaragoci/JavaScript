"use strict";

let date = new Date;
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minute  = date.getMinutes();
let seconds = date.getSeconds();
const timeText = document.querySelector('#time');
const dateText = document.querySelector('#date');

timeText.textContent = `${hour} - ${minute} - ${seconds}`;
dateText.textContent = day + ' ' + month + ' ' + year;

function changeTime() {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour = date.getHours();
    minute  = date.getMinutes();
    seconds = date.getSeconds();

    timeText.textContent = `${hour} - ${minute} - ${seconds}`;
    dateText.textContent = day + ' / ' + month + ' / ' + year;
}

setInterval(changeTime, 1)