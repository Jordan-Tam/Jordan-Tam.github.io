let imageLinks = document.getElementsByTagName("img");

imageLinks[0].onclick = imageLinks[1].onclick = buttonPress;

function buttonPress(event) {
    if (event.target == imageLinks[0]) {
        window.open("https://github.com/Jordan-Tam");
    } else {
        window.open("https://www.linkedin.com/in/jordan-tam-50125626b/");
    }
}