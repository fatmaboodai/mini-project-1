const daysEl = document.getElementById('days');
const hoursEl =document.getElementById('hours') ;
const minsEl=document.getElementById('minutes');
const secondsEl =document.getElementById('seconds') ;

const trip ='1 jul 2021';

function countDown() {
    const tripsDate = new Date(trip);
    const currentDate = new Date();
    const totalSeconds = (tripsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds /3600/24);
    const hours = Math.floor(totalSeconds/3600) %24;
    const mins = Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds )%60;


    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


   console.log(days,hours,mins,seconds)
}
function formatTime(time){
    return time<10 ? (`0${time}`) : time
}
// intial call
countDown()

setInterval(countDown,1000)
// to calculate the seconds