/* zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
}; */

const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

const fivePlusSeven = () => 5 + 7

console.log(fivePlusSeven());//console.log is just to check the outcome

eenplus2 = () => 1 + 2


console.log(eenplus2()) //console.log is just to check the outcome

const myFunction = (a, b) => a + b

console.log(myFunction(1, 4))

const myEasyFunction = a => a

console.log(myEasyFunction(1))



const createObject = () => ({ greeting: "hoi" })

console.log(createObject())