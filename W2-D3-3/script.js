//A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
];

console.log(superheroes.name === "Spiderman")

const findSpiderMan = function (spiderman) {
    return spiderman.find(function (spiderman) {
        return spiderman.name === "Spiderman";
    })

};
console.log("Find Spiderman:", findSpiderMan(superheroes));

//B forEach

const doubleArrayValues = function (array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(element * 2)
    })
    return console.log(newArray);
}

doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]

//B map

//C

const containsNumberBiggerThan10 = function (array) {
    return array.some(number => number >= 10);
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true

//D

const isItalyInTheGreat7 = function (array) {
    console.log(array.includes("Italy", array[0]));
}

isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])
// result should be true

//E

const tenfold = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10)
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F

const isBelow100 = function (array) {
    return array.every(number => number <= 100);
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//G

const bigSum = function (array) {
    return array.reduce(function (total, num) {
        return total + num;
    })
}


console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118