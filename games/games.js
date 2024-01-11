let buttonGameLevelButtons = document.getElementsByClassName("card__btn");
let speedWordlePlayButton = document.getElementById("speedWordlePlayButton");

for(let i = 0; i < buttonGameLevelButtons.length; i++) {
    buttonGameLevelButtons[i].onclick = buttonPress;
}
speedWordlePlayButton.onclick = buttonPress;

function buttonPress(event) {
    
    switch(event.target.id) {
        case "speedWordlePlayButton":
            window.open("../Speed Wordle/speedWordle.html", "_self");
            return;
    }

    let level = 0;
    while(buttonGameLevelButtons[level] != event.target) {
        level++;
    }
    window.open("../Button Game/Level " + (level + 1) + "/level" + (level + 1)+ ".html","_self");
    
}

