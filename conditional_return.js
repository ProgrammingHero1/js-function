function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

// console.log(isEven(5));
// console.log(isEven(110));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(10));
console.log(isOdd(7));