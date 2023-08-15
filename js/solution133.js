const fs = require("fs");

function getOperationFunction(input) {
  return function (old) {
    const string = input.replace(/old/g, old);
    // do not use in production eval is vulnerable to code injection attacks instead use a library like mathjs
    return eval(string);
  };
}

const monkeys = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split("\n\n")
  .map((lines, monkeyId) => {
    const items = lines
      .match(/Starting items(?:[:,] \d+)+/)[0]
      .match(/\d+/g)
      .map(Number);
    const operation = lines.match(/= ([^\n]+)/)[1];

    const divisibleBy = parseInt(lines.match(/divisible by (\d+)/)[1]);
    const whenTrueThrowTo = parseInt(
      lines.match(/If true: throw to monkey (\d)/)[1]
    );
    const whenFalseThrowTo = parseInt(
      lines.match(/If false: throw to monkey (\d)/)[1]
    );
    return {
      id: monkeyId,
      items,
      operation: getOperationFunction(operation),
      whenFalseThrowTo,
      whenTrueThrowTo,
      divisibleBy,
      counter: 0,
      sendTo: (item) => {
        return item % divisibleBy === 0 ? whenTrueThrowTo : whenFalseThrowTo;
      },
    };
  });

function part1() {
  const rounds = 20;
  for (let i = 0; i < rounds; i++) {
    for (let i = 0; i < monkeys.length; i++) {
      const items = monkeys[i].items;
      while (items.length) {
        const item = items.shift();
        monkeys[i].counter++;
        const result = Math.floor(monkeys[i].operation(item) / 3);
        const sendTo = monkeys[i].sendTo(result);
        monkeys[sendTo].items.push(result);
      }
    }
  }
}
function part2() {
  const rounds = 10000;
  const divider = monkeys.map((m) => m.divisibleBy).reduce((a, b) => a * b, 1);
  for (let i = 0; i < rounds; i++) {
    for (let i = 0; i < monkeys.length; i++) {
      const items = monkeys[i].items;
      while (items.length) {
        const item = items.shift();
        monkeys[i].counter++;
        const result = monkeys[i].operation(item) % divider;

        const sendTo = monkeys[i].sendTo(result);
        monkeys[sendTo].items.push(result);
      }
    }
    if (
      [1, 20, 1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 10e3].includes(i + 1)
    )
      console.log(i + 1, monkeys.map((m) => m.counter).join(","));
  }
}

part1();
part2();

const sortedMonkeys = monkeys.sort((a, b) => b.counter - a.counter);
const firstCounter = sortedMonkeys[0].counter;
const secondCounter = sortedMonkeys[1].counter;

console.log(firstCounter * secondCounter);
