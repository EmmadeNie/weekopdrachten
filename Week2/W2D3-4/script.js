const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    console.log("dit is de gehele persoon: ", person)
}

for (let person of array) {
    console.log("dit is de naam van het object: ", person.name)
}

for (let person of array) {
    let geboortejaar = 2020 - person.age
    console.log("dit is het geboortejaar van het object: ", geboortejaar)
}

for (let person of array) {
    console.log(`${person.name} is een ${person.profession}`)
}

for (let person of array) {
    console.log(`${person.name} is een ${person.profession}`)
}

for (let person of array) {
    if (person.age >= 50) {
        console.log(person.name, ", you are old!")
    }
}