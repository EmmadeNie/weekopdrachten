//function 1
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4))// returns 10

//function 2
let nums = [1, 2, 3];

function sum2(x, y, z) {
    return x + y + z;
}

console.log(sum2(...nums))

