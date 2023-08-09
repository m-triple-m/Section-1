// WAP to check if a number is divisible by 7 or 11.

let num = 77;

if(num%7 === 0 && num%11 === 0  ){
    console.log('divisible by 7 and 11');
}else if(num%11 === 0){
    console.log('divisible only by 11');
}else if(num%7 === 0){
    console.log('divisible only by 7');
}else{
    console.log('not divisible by 7 or 11');
}

// What's new
// 1. === compares data type and value

console.log('234' == 234); // true
console.log('234' === 234); // false

// 2. ** operation

console.log(7 ** 3);
console.log(49 ** 0.5);