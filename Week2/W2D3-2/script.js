//A

const addTheWordCool = function (array) {
    array.push("Cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//B

const amountOfElementsInArray = function (array) {
    return array.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C 

const selectBelgiumFromBenelux = function (array) {
    return array[0]
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//D

const lastElementInArray = function (array) {
    return array[array.length - 1]
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));


//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    newArray = array.slice(1, array.length);
    console.log("1", newArray, presidents);
    return newArray;

}
const impeachTrumpSplice = function (array) {
    newArray2 = array.splice(0, 1);
    console.log(newArray2, presidents);
    return array
}

console.log("2", impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log("3", impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

console.log(presidents)
console.log(newArray)
console.log(newArray2)

//splice maakt een nieuwe array en laat de eerste intact. 
//slice neemt de element en slaat die op in een nieuwe array, dat element wordt uit de array gehaald. Array wordt dus gemuteerd.

//F

const stringsTogether = function (array) {
    return array.join(" ")
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

//G

const combineArrays = function (array1, array2) {
    console.log(array1.concat(array2))
}

combineArrays([1, 2, 3], [4, 5, 6])
// resultaat: [1,2,3,4,5,6]