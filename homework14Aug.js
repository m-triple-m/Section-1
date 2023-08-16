// 2. WAP to print Fibonacci series given starting numbers and total numbers to print

const printFobonacci = (start, end, length) => {
    
    console.log(start);
    console.log(end);
    for(let i=0; i<length-2; i++){
        let c = start + end;
        console.log(c);
        start = end;
        end = c;
    }
}

printFobonacci(4, 5, 20);

// 3. Print pyramid pattern

const printPyramid = (n) => {
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n-i; j++){
            process.stdout.write(' ');
        }
        for(let k=1; k<=i; k++){
            process.stdout.write('* ');
        }
        console.log();
    }
}

const printPyramid2 = (n) => {
    for(let i=1; i<=n; i++){
        process.stdout.write(' '.repeat(n-i));
        process.stdout.write('* '.repeat(i));
        
        console.log();
    }
}

// process.stdout.write('nice');
printPyramid2(10);
printPyramid2(5);
printPyramid2(20);
