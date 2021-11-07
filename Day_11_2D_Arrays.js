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
    const arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .split(' ')
            .map(arrTemp => parseInt(arrTemp, 10));
    }
    console.log(getMaxHourglassSum(arr));
}

function getMaxHourglassSum(arr){
    const hourglassesSum = [];
    for (let i = 0; arr.length - i >= 3; i++) {
        for (let j = 0; arr[i].length - j >= 3; j++) {
            const sum = 
                Number([arr[i][j]]) + Number([arr[i][j + 1]]) + Number([arr[i][j + 2]]) +
                Number([arr[i + 1][j + 1]]) + 
                Number([arr[i + 2][j]]) + Number([arr[i + 2][j + 1]]) + Number([arr[i + 2][j + 2]]);
            hourglassesSum.push(sum);            
        }
    }  
    return Math.max(...hourglassesSum);       
}
