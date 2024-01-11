let button1 = document.getElementById("one");
let button2 = document.getElementById("two");
let button3 = document.getElementById("three");
let button4 = document.getElementById("four");
let squares = document.getElementsByClassName("square");
let topLeft = document.getElementById("topleft");
let topRight = document.getElementById("topright");
let bottomLeft = document.getElementById("bottomleft");
let bottomRight = document.getElementById("bottomright");

button1.onclick = buttonPress;
button2.onclick = buttonPress;
button3.onclick = buttonPress;
button4.onclick = buttonPress;

let coordinates = [0, 0];
let visits = [];

function buttonPress(event) {
    //console.log(event.target.id);
    if (event.target.id == "one") {
        if(coordinates[1] != -1) {
            moveCircleAndUpdateCoordinates(coordinates[0], coordinates[1] - 1);
            updateVisits();
        }
    } else if (event.target.id == "two") {
        if(coordinates[0] != -1) {
            moveCircleAndUpdateCoordinates(coordinates[0] - 1, coordinates[1]);
            updateVisits();
        }
    } else if (event.target.id == "three") {
        if(coordinates[1] != 1) {
            moveCircleAndUpdateCoordinates(coordinates[0], coordinates[1] + 1);
            updateVisits();
        }
    } else if (event.target.id == "four") {
        if(coordinates[0] != 1) {
            moveCircleAndUpdateCoordinates(coordinates[0] + 1, coordinates[1]);
            updateVisits();
        }
    }
}

function moveCircleAndUpdateCoordinates(x, y) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
    button1.textContent = "I";
    button2.textContent = "II";
    button3.textContent = "III";
    button4.textContent = "IV";

    let putCircleHere;
    let xy = String(x) + " " + String(y);
    switch(xy) {
        case "-1 1" : putCircleHere = topLeft; break;
        case "0 1"  : putCircleHere = button3; break;
        case "1 1"  : putCircleHere = topRight; break;
        case "-1 0" : putCircleHere = button2; break;
        case "0 0"  : putCircleHere = middle; break;
        case "1 0"  : putCircleHere = button4; break;
        case "-1 -1": putCircleHere = bottomLeft; break;
        case "0 -1" : putCircleHere = button1; break;
        case "1 -1" : putCircleHere = bottomRight; break;
    }

    putCircleHere.innerHTML = '<svg height="100" width="100"> <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/> </svg>';

    coordinates = [x,y];
}

function updateVisits() {
    if (visits.length == 4) {
        visits.shift();
    }

    switch(coordinates.toString()) {
        case "0,-1": visits.push(1); break;
        case "-1,0": visits.push(2); break;
        case "0,1" : visits.push(3); break;
        case "1,0" : visits.push(4); break;
    }

    (visits.toString() == "1,2,3,4") ? nextLevel() : 0;
}

function nextLevel() {
    window.open("../Level 4/level4.html","_self");
}