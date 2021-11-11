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

function main() {
  const size = Number(readLine());
  const elements = readLine().split(" ");
  let max = -999;
  let min = 999;
  for (let i = 0; i < size; i++) {
    const element = Number(elements[i]);
    if (element > max) max = element;
    if (element < min) min = element;
  }
  console.log(Math.abs(max - min));
}
