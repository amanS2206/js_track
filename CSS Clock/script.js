const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

function setDate(){
    const current = new Date();

    const seconds = current.getSeconds();
    const min = current.getMinutes();
    const hour = current.getHours();
    const secondDegree = ((seconds/60)*360) + 90;
    const hourDegree =  ((hour / 12) * 360) + ((min/60)*30) + 90;
    const minDegree = ((min / 60) * 360) + ((seconds/60)*6) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();