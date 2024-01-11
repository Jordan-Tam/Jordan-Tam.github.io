// Global variables
let borderStyle = "5px solid black";
let currentStage = 1;

// Get elements
let squares = document.getElementsByClassName("square");
let up      = document.getElementById("upArrow");
let left    = document.getElementById("leftArrow");
let right   = document.getElementById("rightArrow");
let down    = document.getElementById("downArrow");

// Add event listeners to buttons
up.onclick =
left.onclick =
right.onclick =
down.onclick = buttonPress;

// UP   : 3, 6, 10, 11, 14
// DOWN : 4, 8, 12
// LEFT : 5, 7
// RIGHT: 1, 2, 9, 13

function buttonPress(event) {
    //* The if statements use "event.currentTarget.id" instead of "event.target.id" because the target is actually the SVG file inside the button element. To access the button element itself, currentTarget is used.
    if (event.target.id == "upArrow" ||
        event.currentTarget.id == "upArrow") {
        switch(currentStage) {
            case 3: case 6: case 10: case 11:
                setStage(++currentStage);
                break;
            case 14: nextLevel(); break;
            default: setStage(currentStage = 1);
        }
    } else if (event.currentTarget.id == "leftArrow") {
        switch(currentStage) {
            case 5: case 7:
                setStage(++currentStage);
                break;
            default: setStage(currentStage = 1);
        }
    } else if (event.currentTarget.id == "rightArrow") {
        switch(currentStage) {
            case 1: case 2: case 9: case 13:
                setStage(++currentStage);
                break;
            default: setStage(currentStage = 1);
        }
    } else if (event.currentTarget.id == "downArrow") {
        switch(currentStage) {
            case 4: case 8: case 12:
                setStage(++currentStage);
                break;
            default: setStage(currentStage = 1);
        }
    }
}


// Functions
function setPerimeter() {
    //* Top-left square
    squares[0].style.borderTop =
    squares[0].style.borderLeft =
    //* Top-middle square
    squares[1].style.borderTop = 
    //* Top-right square
    squares[2].style.borderTop =
    squares[2].style.borderRight =
    //* Middle-left square
    squares[3].style.borderLeft =
    //* Middle-middle square
    // Haha
    //* Middle-right square
    squares[5].style.borderRight =
    //* Bottom-left square
    squares[6].style.borderLeft =
    squares[6].style.borderBottom =
    //* Bottom-middle square
    squares[7].style.borderBottom =
    //* Bottom-right square
    squares[8].style.borderRight =
    squares[8].style.borderBottom = borderStyle;
}

function resetWalls() {
    squares[0].style.borderRight =
    squares[0].style.borderBottom =
    squares[1].style.borderLeft =
    squares[1].style.borderRight =
    squares[1].style.borderBottom =
    squares[2].style.borderLeft =
    squares[2].style.borderBottom =
    squares[3].style.borderTop =
    squares[3].style.borderRight =
    squares[3].style.borderBottom =
    squares[4].style.borderTop =
    squares[4].style.borderLeft =
    squares[4].style.borderRight =
    squares[4].style.borderBottom =
    squares[5].style.borderTop =
    squares[5].style.borderLeft =
    squares[5].style.borderBottom =
    squares[6].style.borderTop =
    squares[6].style.borderRight =
    squares[7].style.borderTop =
    squares[7].style.borderLeft =
    squares[7].style.borderRight =
    squares[8].style.borderTop =
    squares[8].style.borderLeft = "none";
}

function setStage(stageNum) {
    resetWalls();
    if (stageNum == 1) {
        squares[6].textContent = "START";
    } else {
        squares[6].textContent = "";
    }
    if (stageNum === 1) {
        squares[1].style.borderBottom =
        squares[2].style.borderBottom =
        squares[6].style.borderTop =
        squares[7].style.borderRight = borderStyle;
    } else if (stageNum === 2) {
        squares[1].style.borderLeft =
        squares[2].style.borderBottom =
        squares[7].style.borderLeft =
        squares[7].style.borderTop = borderStyle;
    } else if (stageNum === 3) {
        squares[2].style.borderLeft =
        squares[5].style.borderLeft =
        squares[8].style.borderLeft = borderStyle;
    } else if (stageNum === 4) {
        squares[4].style.borderTop =
        squares[4].style.borderLeft =
        squares[4].style.borderBottom =
        squares[5].style.borderTop = borderStyle;
    } else if (stageNum === 5) {
        squares[4].style.borderRight =
        squares[5].style.borderTop = borderStyle;
    } else if (stageNum === 6) {
        squares[1].style.borderLeft =
        squares[1].style.borderRight =
        squares[6].style.borderTop =
        squares[8].style.borderTop = borderStyle;
    } else if (stageNum === 7) {
        squares[1].style.borderBottom =
        squares[2].style.borderBottom =
        squares[3].style.borderBottom =
        squares[4].style.borderBottom = borderStyle;
    } else if (stageNum === 8) {
        squares[0].style.borderRight =
        squares[3].style.borderRight =
        squares[4].style.borderRight =
        squares[7].style.borderRight = borderStyle;
    } else if (stageNum === 9) {
        squares[6].style.borderTop = borderStyle;
    } else if (stageNum === 10) {
        squares[7].style.borderRight = borderStyle;
    } else if (stageNum === 11) {
        // squares[4].style.borderRight = borderStyle;
        squares[5].style.borderTop = borderStyle;
    } else if (stageNum === 12) {
        squares[1].style.borderRight = borderStyle;
    } else if (stageNum === 13) {
        squares[1].style.borderBottom = borderStyle;
    } else if (stageNum === 14) {
        // no walls
    }
}

function nextLevel() {
    window.open("../Level 5/level5.html","_self");
}

// Set perimeters and stage 1 borders upon loading page.
setPerimeter();
setStage(1);