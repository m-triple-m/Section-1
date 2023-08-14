const myarray = [ 'name', 87637, 234.45, true, console.log ];

console.log(myarray);
console.log(typeof myarray);

const movies = [ 'KGF', 'Pushpa', 'DDLJ', 'RRR', 'Insidious', 'Thor' ];

console.log(movies.length); //also works with strings

// Adding new elements
movies.push('Iron Man');  // adds new element at the end
movies.unshift('Batman'); // adds new element at the beginning

console.log(movies);

// Indexing
console.log(movies[5]); // also works with strings
console.log(movies[-4]); // not works

console.log(movies.at(-5))

// replacing elements

movies[4] = 'Flash';

console.log(movies);

// removing elements
movies.pop(); // removes last element
movies.shift(); // removes first element

console.log(movies);

movies.splice(3, 2);

console.log(movies);

console.log( movies.slice( 1, 3 ) );