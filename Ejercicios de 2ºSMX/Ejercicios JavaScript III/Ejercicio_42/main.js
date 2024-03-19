const p = document.querySelector('p'); 
const activate = document.querySelector('#start');
const deactivate = document.querySelector('#stop');
let completeDate, minutes, hours, seconds,pDate, timeInterval;

function generateTime() {
    completeDate = new Date();
    hours = completeDate.getHours();
    minutes = completeDate.getMinutes();
    seconds = completeDate.getSeconds();

    pDate = `${hours}:${minutes}:${seconds}`;
    p.textContent = pDate;
};

timeInterval = setInterval(generateTime, 1)

activate.addEventListener('click', ()=>{
    timeInterval = setInterval(generateTime, 1)
})

deactivate.addEventListener('click', ()=>{
    clearInterval(timeInterval);
});