const timerElement = document.getElementById('timer');
let timeLeft = parseInt(timerElement.textContent);


const timerId = setInterval(() => {
 
    timeLeft--;
    

    timerElement.textContent = timeLeft;
    
    if (timeLeft === 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);