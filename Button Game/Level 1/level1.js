//* Get buttons.
let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");

button1.onclick = buttonPress;
button2.onclick = buttonPress;
button3.onclick = buttonPress;

//* Track order of button presses.
let currentNumber = 0;

function buttonPress(event) {
    if (event.target.id == "b1") {
        currentNumber = 1;
    } else if (event.target.id == "b2") {
        if (currentNumber != 1) currentNumber = 0;
        else currentNumber++;
    } else if (event.target.id == "b3") {
        if (currentNumber != 2) currentNumber = 0;
        else nextLevel();
    }
}

function nextLevel() {
    window.open("../Level 2/level2.html","_self");
}