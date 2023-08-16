const nums = [ 2, 5, 3, 6, 9, 4, 3 ];

for(let i=0; i<nums.length; i++){
    console.log(nums[i] ** 2);
}

for(let n of nums){
    console.log(n ** 2);
}

nums.forEach( (e) => { console.log(e ** 2) } );

// WAP to store all even number from nums in a new array
let newArr = [];
for(let i of nums){
    if(i%2===0) newArr.push(i)
}

console.log(newArr);

// Filter functions

const filteredArr = nums.filter((n) => { return n%2===0 });

console.log(filteredArr);

const prices = [120, 4500, 700, 1200, 999, 2300, 640, 140]
// WAP to filter prices between 1000 and 3000