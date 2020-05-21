/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (num) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (num < 10) {
                resolved('Yeah');
            } else {
                rejected('Oeps');
            }
        }, 1000)
    })
};

testNum(11).then(element => console.log(element)).catch(element => console.log(element))

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), 
will take in an array of words and capitalize them, and then the second function, sortWords(), 
will sort the words in alphabetical order. If the array contains anything but strings, 
it should throw an error. Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.every(element => typeof element === 'string')) {
                resolve(array.map(element => {
                    return element.toUpperCase()
                }))
            } else {
                reject('please return strings')
            }

        }, 1000)
    })
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {

        resolve(words.sort());
    })
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console
console.log("1", arrayOfWords)

makeAllCaps(arrayOfWords).then(sortWords(arrayOfWords)).then(resolved => console.log(resolved)).catch(element => console.log(element))
console.log("2", arrayOfWords)

makeAllCaps(complicatedArray).then(sortWords(complicatedArray)).then(resolved => console.log(resolved)).catch(element => console.log(element))
