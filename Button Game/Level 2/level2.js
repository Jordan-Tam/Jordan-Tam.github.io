let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let yellowButton = document.getElementById("yellow");

let buttonPresses = []

redButton.onclick = buttonPress;
blueButton.onclick = buttonPress;
yellowButton.onclick = buttonPress;

function buttonPress(event) {
    if (event.target.id == "red") {
        buttonPresses.push(1);
        checkOrderedSubset();
    } else if (event.target.id == "blue") {
        buttonPresses.push(2);
        checkOrderedSubset();
    } else if (event.target.id == "yellow") {
        buttonPresses.push(3);
        checkOrderedSubset();
    }
}

let answer1 = [1, 3, 1, 2, 2, 3]
let answer2 = [3, 1, 2, 1, 3, 2]
let answer3 = [1, 3, 1, 2, 3, 2]
let answer4 = [1, 3, 2, 1, 2, 3]
let answer5 = [3, 1, 1, 2, 2, 3]
let answer6 = [3, 1, 2, 1, 2, 3]
let answer7 = [3, 1, 1, 2, 3, 2]
let answer8 = [1, 3, 2, 1, 3, 2]

function checkOrderedSubset() {
    if (buttonPresses.length > 6) {
        buttonPresses.shift();
    }
    if (buttonPresses.length == 6) {
        switch(buttonPresses.toString()) {
            case answer1.toString():
            case answer2.toString():
            case answer3.toString():
            case answer4.toString():
            case answer5.toString():
            case answer6.toString():
            case answer7.toString():
            case answer8.toString():
                nextLevel();
        }
    }
}

function nextLevel() {
    window.open("../Level 3/level3.html","_self");
}

/*
L L L : [1, 3, 1, 2, 2, 3]
R R R : [3, 1, 2, 1, 3, 2]

L L R : [1, 3, 1, 2, 3, 2]
L R L : [1, 3, 2, 1, 2, 3]
R L L : [3, 1, 1, 2, 2, 3]

R R L : [3, 1, 2, 1, 2, 3]
R L R : [3, 1, 1, 2, 3, 2]
L R R : [1, 3, 2, 1, 3, 2]

*/