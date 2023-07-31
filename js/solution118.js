// aoc day 3.2
const fs = require("fs");

let priorityMap = {};
let letters = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < letters.length; i++) {
  priorityMap[letters[i]] = i + 1;
  priorityMap[letters[i].toUpperCase()] = i + 27;
}

function getPriority(letter) {
  return priorityMap[letter];
}

let counter = 0;
let commonLetters = [];

const rucksacks = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n");

for (let i = 0; i < rucksacks.length; i += 3) {
  let rucksack1 = new Set(rucksacks[i]);
  let rucksack2 = new Set(rucksacks[i + 1]);
  let rucksack3 = new Set(rucksacks[i + 2]);
  for (let letter of rucksack1) {
    if (rucksack2.has(letter) && rucksack3.has(letter)) {
      commonLetters.push(letter);
    }
  }
}

console.log(commonLetters);
commonLetters.forEach((letter) => {
  counter += getPriority(letter);
});
console.log(counter);
