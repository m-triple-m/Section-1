// 1. check if a number is perfect square or not

let num1 = 17;

let sqrt = num1 ** 0.5;

if (sqrt % 1 === 0) {
  console.log(`${num1} is a perfect square`);
} else {
  console.log(`${num1} is not a perfect square`);
}

// console.log(8735 % 1);

// 2. WAP to print all perfect squares in range of 100 - 500.

for (let i = 100; i <= 500; i++) {
  let sqrt = i ** 0.5;
  if (sqrt % 1 === 0) {
    console.log(i);
  }
}

// 4. WAP to check if a number is palindrome.

let b = 1272721;
let rev = 0;
let temp = b;

while (b > 0) {
  let d = b % 10;
  rev = rev * 10 + d;
  b = parseInt(b / 10);
}

if (temp === rev) {
  console.log(`${temp} is a palindrome`);
} else {
  console.log(`${temp} is not a palindrome`);
}

// 5. WAP to print all prime numbers in range of 100 - 2000

console.log('-----------Prime Numbers-----------');

for (let num = 100; num <= 2000; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log(num);
}
