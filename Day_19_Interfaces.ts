'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

interface AdvancedArithmetic {
    divisorSum(n: number): number;
}

class Calculator implements AdvancedArithmetic {
    divisorSum(n: number): number {
        let sum = 0;
        let i = 0;
        while (i++<n) 
            if(n % i == 0) sum = sum + i;
        console.log('I implemented: AdvancedArithmetic');
        return sum;
    }    
}

function main() {
    const calculator = new Calculator();
    const n = Number(readLine());
    const sum = calculator.divisorSum(n);
    console.log(sum);   
}
