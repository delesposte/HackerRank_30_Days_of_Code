'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('[ \n]+'));
  main();
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " + this.lastName + ", " + this.firstName
      + "\nID: " + this.idNumber
    )
  }
}

class Student extends Person {
  constructor(firstName, lastName, idNumber, scores) {
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }

  calculate() {
    let sum = 0;
    if (this.scores)
      for (const score of this.scores)
        sum = sum + Number(score);
    const average = sum / this.scores.length;
    if (average >= 90 && average <= 100) return 'O';
    if (average >= 80 && average < 90) return 'E';
    if (average >= 70 && average < 80) return 'A';
    if (average >= 55 && average < 70) return 'P';
    if (average >= 40 && average < 55) return 'D';
    if (average < 40) return 'T';
  }
}

function main() {
  let firstName = read()
  let lastName = read()
  let id = +read()
  let numScores = +read()
  let testScores = new Array(numScores)

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read()
  }

  let s = new Student(firstName, lastName, id, testScores)
  s.printPerson()
  s.calculate()
  console.log('Grade: ' + s.calculate())
}
