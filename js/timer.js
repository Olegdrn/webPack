const resultTimer = document.getElementById('timercalc__result');
const stopTimer = document.getElementById('stop');

export const timer = (timerNumber) => {
  setInterval(() => {
    const seconds = timerNumber % 60;
    const minites = timerNumber / 60 % 60;
    const hours = timerNumber / 3600;
    if (timerNumber <= 0) {
      clearInterval(timer);
      resultTimer.innerHTML = "Время закончилось"
    } else {
      resultTimer.innerHTML = `${Math.floor(hours)} : ${Math.floor(minites)} : ${seconds}`
    }
    timerNumber--;
  }, 1000);
  stopTimer.onclick = () => {
    clearInterval(timer);
    resultTimer.innerHTML = "Stop"
  }

}