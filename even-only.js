/**
 * create function that will return only the even numbers
 * return the sum of even numbers
*/

function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens)

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);

console.log('sum of the even numbers is', sum);