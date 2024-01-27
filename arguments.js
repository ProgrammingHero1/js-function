function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function')
doubleIt(15);
console.log('------------------');
doubleIt(88);
console.log('-----------------');
doubleIt(873);
const number = 55;
doubleIt(number);
const money = 112;
doubleIt(money);


// 
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);