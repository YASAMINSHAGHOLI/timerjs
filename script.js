let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    console.log("Starting timer");  // Debugging log
    hours = parseInt(document.getElementById("inputHours").value) - 1; // Get initial hours from input field
    minutes = parseInt(document.getElementById("minutes").innerText);
    seconds = parseInt(document.getElementById("seconds").innerText);

    // Update the display with the adjusted hours
    document.getElementById("displayHours").innerText = String(hours).padStart(2, '0');

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds--;

    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }

    if (minutes < 0) {
        hours--;
        minutes = 59;
    }

    if (hours < 0) {
        stopTimer();
        alert("Time's up!");
        return;
    }

    document.getElementById("displayHours").innerText = String(hours).padStart(2, '0'); // Update display for hours
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

function stopTimer() {
    console.log("Stopping timer"); // Debugging log
    clearInterval(timer);
    console.log("Timer stopped"); // Debugging log
}

// Add event listeners
document.querySelector('button:nth-child(1)').addEventListener('click', startTimer);
document.querySelector('button:nth-child(2)').addEventListener('click', stopTimer);
