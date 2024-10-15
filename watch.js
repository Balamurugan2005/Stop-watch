let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;


const startStopBtn = document.getElementById('startStop');
startStopBtn.addEventListener('click', () => {
  if (!running) {
    timer = setInterval(updateTime, 10); 
    running = true;
    startStopBtn.textContent = "Stop";
  } else {
    clearInterval(timer);
    running = false;
    startStopBtn.textContent = "Start";
  }
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  running = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  startStopBtn.textContent = "Start";
  document.getElementById('laps').innerHTML = ""; 
});


const lapBtn = document.getElementById('lap');
lapBtn.addEventListener('click', () => {
  if (running) {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    const lapDiv = document.createElement('div');
    lapDiv.textContent = `Lap ${document.getElementById('laps').children.length + 1}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapDiv);
  }
});


function updateTime() {
  milliseconds += 1;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  updateDisplay();
}


function updateDisplay() {
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);
  document.getElementById('milliseconds').textContent = formatTime(milliseconds);
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
