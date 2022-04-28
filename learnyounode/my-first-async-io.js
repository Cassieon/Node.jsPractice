// Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l.  
   
//   The full path to the file to read will be provided as the first  
//   command-line argument.   

//start with one fs// pass value as 2nd argument in callback function//
// it needs to read file// print number of new lines//
//use callback function


const fs = require('fs');
const fileName = process.argv[2]

function fileReader(callback){
    fs.readFile(fileName, 'utf-8', function readComplete(err, data) {
        if (err) throw err;
        txtInFile = data.split('\n').length - 1
        callback()
    });
}

function logFileText() {
    console.log(txtInFile)
}

fileReader(logFileText)


