//Write a program that accepts one or more numbers as command-line arguments  
//and prints the sum of those numbers to the console (stdout).  
//need to loop thru number arguments


    //const arr = [3, 4, 5, 2, 7]
    let sum = 0;

    for (let i = 2; i < process.argv.length; i++) {
        sum += +process.argv[i];
    }
    console.log(sum);

