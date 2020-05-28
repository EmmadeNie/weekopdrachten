const array = [2, 3, 4, 5]

const addOne = function (numbers) {
    const output = numbers.map(number => number + 1)
    return output;
}
module.exports = addOne;