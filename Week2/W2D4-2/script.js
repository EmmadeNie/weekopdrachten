const bigFiveList = document.getElementsByClassName("big-five-list")[0];
const spottedAnimalList = document.querySelector("#spotted-animals-list")
const buttons = Array.from(bigFiveList.querySelectorAll(".big-five-list-item button"));

const addSpottedAnimal = () => {
    const listElement = document.createElement("li");
    spottedAnimalList.appendChild(listElement);
    listElement.className = "spotted-animals-list-item";
    listElement.innerHTML = event.target.innerHTML
}

buttons.forEach(button => button.addEventListener('click', addSpottedAnimal))

//2

const removeFirstButton = document.querySelector("#remove-first-item-button")


const removeFirst = () => {
    const firstSpotted = spottedAnimalList.children[0];
    spottedAnimalList.removeChild(firstSpotted);
}

removeFirstButton.addEventListener('click', removeFirst)

//3
const removeAllButton = document.querySelector("#remove-all-button")

const removeAll = () => {

    var node = document.getElementById("parent");
    node.querySelectorAll('*').forEach(n => n.remove());
}

removeAllButton.addEventListener('click', removeAll)

/*const removeAll = () => {
    spottedAnimalList.innerHTML = "";
}
*/

