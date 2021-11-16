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
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const numSwaps  = sort(a, n);
    console.log(`Array is sorted in ${numSwaps.toString()} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);       
}

function sort(array, size){    
    let totalSwaps = 0;
    for (let i = 0; i < size; i++) {
        let swapsRound = 0;        
        for (let j = 0; j < size - 1; j++) 
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array)
                swapsRound++;
            }                           
        if (swapsRound == 0) break;
        totalSwaps = totalSwaps + swapsRound;
    }       
    return totalSwaps;
}

function swap(posA, posB, array)
{
    const valueB = array[posB];
    array[posB] = array[posA];
    array[posA] = valueB;
}
