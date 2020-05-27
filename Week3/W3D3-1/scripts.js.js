//function 1
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4))// returns 10

