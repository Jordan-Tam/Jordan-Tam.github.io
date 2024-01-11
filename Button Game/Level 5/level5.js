//* Get elements
let letters = document.getElementsByClassName("letter");

//* Global variable
let buttonPresses = [];

for(let i = 0; i < letters.length; i++) {
    letters[i].onclick = buttonPress;
}

function buttonPress(event) {
    if (buttonPresses.length == 8) {
        buttonPresses.shift();
    }
    switch(event.target.id) {
        case "d" : buttonPresses.push("d") ; break;
        case "o" : buttonPresses.push("o") ; break;
        case "w" : buttonPresses.push("w") ; break;
        case "n" : buttonPresses.push("n") ; break;
        case "w2": buttonPresses.push("w2"); break;
        case "a" : buttonPresses.push("a") ; break;
        case "r" : buttonPresses.push("r") ; break;
        case "d2": buttonPresses.push("d2"); break;
    }
    if (buttonPresses.toString() == "o,w2,d2,n,r,w,d,a") {
        nextLevel();
    }
}

function nextLevel() {
    window.open("../Level 6/level6.html","_self");
}