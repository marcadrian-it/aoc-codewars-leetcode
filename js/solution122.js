// aoc 5.2
const fs = require("fs");

const parts = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n\n");

const cratesStr = parts[0];
const movesStr = parts[1];

const lines = cratesStr.split("\n");
const stacks = [];
for (let i = 0; i < lines[0].length; i++) {
  const stack = [];
  for (const line of lines) {
    if (i < line.length && /[A-Z]/.test(line[i])) {
      stack.push(line[i]);
    }
  }
  if (stack.length > 0) {
    stack.reverse();
    stacks.push(stack);
  }
}

const commands = movesStr.split("\n");
const moves = [];
for (const line of commands) {
  const numbers = line.match(/\d+/g);
  if (numbers) {
    moves.push(numbers.map(Number));
  }
}

moves.forEach((move) => {
  const amount = move[0];
  const from = move[1];
  const to = move[2];

  const stackFrom = stacks[from - 1];
  const stackTo = stacks[to - 1];
  const crates = stackFrom.splice(stackFrom.length - amount, amount);
  stackTo.push(...crates);
});
console.log(stacks);
let result = "";
stacks.forEach((stack) => {
  result += stack.pop();
});
console.log(result);
