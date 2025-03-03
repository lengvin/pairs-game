import { totalFlips } from "./gameLogic.js";

let totalTime = 120;
let intervalId;

function startTimer() {
    const stateTime = document.querySelector('.state__time');
    const stateMoves = document.querySelector('.state__moves');
    intervalId = setInterval(() => {    
        totalTime--;
        stateMoves.textContent = `Шаги: ${totalFlips} шагов`;
        stateTime.textContent = `время: ${totalTime} сек`;
        if (totalTime === 0) {
            clearInterval(intervalId);
        }
    }, 1000)
}

function stopTimer() {

}

export {startTimer, stopTimer, totalTime};