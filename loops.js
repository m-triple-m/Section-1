for(let i=0; i<10; i++){
    console.log(i);
}

console.log('----------------');
const num = 67;
let isPrime = true;

for(let i=2; i<num; i++){
    if(num % i === 0){
        console.log('not prime');
        isPrime = false;
        break;
    }
}

if(isPrime) console.log('prime');

// WAP to check if a number is divisible by 7 and 11
// in range of 100 - 5000;

for(let i=100; i<=5000; i++){
    if(i%7 === 0 && i%11 === 0){
        console.log(i);
    }
}


console.log('-----------Using While Loop-----------');
// While Loop

let a = 10;

while(a<20){
    console.log(a);
    a+=2;
}

let b = 723;
let rev = 0;

while(b>0){
    let d = b%10;
    rev = rev*10 + d;
    b = parseInt(b/10);
}

console.log(rev);

console.log('-----------Using Do While Loop-----------');

let c = 10;

do{
    console.log(c);
}while(c>10)