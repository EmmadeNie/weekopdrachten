const body = document.querySelector('#body');
const dropdown = document.querySelector('#dropdown')

const toggleMenu = function () {
    dropdown.classList.toggle("show");
}
const changeToPink = function () {
    body.className = "pink-background";
    toggleMenu();
}
const changeToRed = function () {
    body.className = "red-background";
    dropdown.classList.remove("show");
    toggleMenu();
}
const changeToPurple = function () {
    body.className = "purple-background";
    dropdown.classList.remove("show");
    toggleMenu();
}
const changeToBlue = function () {
    body.className = "blue-background";
    dropdown.classList.remove("show");
    toggleMenu();
}
const changeToBlack = function () {
    body.className = "black-background";
    dropdown.classList.remove("show");
    toggleMenu();
}

dropdown.parentElement.firstElementChild.addEventListener('click', toggleMenu)

dropdown.children[0].addEventListener('click', changeToPink)
dropdown.children[1].addEventListener('click', changeToRed)
dropdown.children[2].addEventListener('click', changeToPurple)
dropdown.children[3].addEventListener('click', changeToBlue)
dropdown.children[4].addEventListener('click', changeToBlack)

dropdown.children[0].addEventListener('click', changeToPink)
dropdown.children[1].addEventListener('click', changeToRed)
dropdown.children[2].addEventListener('click', changeToPurple)
dropdown.children[3].addEventListener('click', changeToBlue)
dropdown.children[4].addEventListener('click', changeToBlack)


