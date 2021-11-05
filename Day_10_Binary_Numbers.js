'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const binary = intToBinary(n);
    const max = maxConsecutiveOnes(binary);
    console.log(max);  
}

function intToBinary(value){
    return value.toString(2);
}

function maxConsecutiveOnes(value){
    let max = 0;
    const consecutiveOnes = value.split("0");    
    consecutiveOnes.forEach(element => {
      if(element.length > max) max = element.length
    })
    return max;
}
