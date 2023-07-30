// aoc day 3.1
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

const rucksacks = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n");

rucksacks.forEach((rucksack) => {
  const split_index = rucksack.length / 2 - 1;
  const first_compartment = rucksack.slice(0, split_index + 1);
  const second_compartment = [
    ...rucksack.slice(split_index + 1, rucksack.length),
  ];

  let first_compartment_set = new Set(first_compartment);
  const appearsinboth = second_compartment.filter((item) =>
    first_compartment_set.has(item)
  );
  counter += getPriority(appearsinboth[0]);
});

console.log(counter);
