let myName = document.getElementById("name");
let links = document.getElementById("linksButton");
let games = document.getElementById("gamesButton");

anime({
    targets: myName,
    translateX: (window.innerWidth / 2) - (myName.clientWidth / 2)
});
anime({
    targets: links,
    translateX: (window.innerWidth / 2) - (links.clientWidth / 2)
});
anime({
    targets: games,
    translateX: (window.innerWidth / 2) - (games.clientWidth / 2)
});

function keepMenuCentered() {
    anime({
        targets: myName,
        translateX: (window.innerWidth / 2) - (myName.clientWidth / 2)
    });
    anime({
        targets: links,
        translateX: (window.innerWidth / 2) - (links.clientWidth / 2)
    });
    anime({
        targets: games,
        translateX: (window.innerWidth / 2) - (games.clientWidth / 2)
    });
}

window.onresize = keepMenuCentered;

links.onclick = games.onclick = buttonPress;

function buttonPress(event) {
    if(event.target.id == "linksButton") {
    } else if (event.target.id == "gamesButton") {
        window.open("games/games.html","_self");
    }
}