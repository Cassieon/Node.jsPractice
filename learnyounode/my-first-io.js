// Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.  
   
//   The full path to the file to read will be provided as the first  
//   command-line argument (i.e., process.argv[2]). You do not need to make  
//   your own test file.

//need to use fs to readfil
//how to print new line?

//const readline = require('readline');
const fs = require('fs');
const file = process.argv[2];

fs.readFileSync(file, 'utf-8', function (err, buffer) {
    if (err) {
        console.log(err);
    }
        const text = buffer.toString();
        const newLine = text.split('/n');
        console.log(newLine)

})