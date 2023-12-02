const fs = require("fs");

const numberWords = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const lines = fs.readFileSync("input.txt", "utf8").split("\n");

let sum = 0;
lines.forEach((line) => {
  let first;
  let second;

  while (
    !Object.keys(numberWords).some((word) => line.startsWith(word)) &&
    isNaN(parseInt(line[0]))
  ) {
    line = line.slice(1);
  }
  while (
    !Object.keys(numberWords).some((word) => line.endsWith(word)) &&
    isNaN(parseInt(line[line.length - 1]))
  ) {
    line = line.slice(0, -1);
  }

  for (let word in numberWords) {
    if (line.startsWith(word)) {
      first = numberWords[word];
    }
    if (line.endsWith(word)) {
      second = numberWords[word];
    }
  }

  if (isNaN(parseInt(line[0])) === false) {
    first = parseInt(line[0]);
  }
  if (isNaN(parseInt(line[line.length - 1])) === false) {
    second = parseInt(line[line.length - 1]);
  }

  if (first !== undefined && second !== undefined) {
    sum += first * 10 + second;
  }
});
console.log(sum);
