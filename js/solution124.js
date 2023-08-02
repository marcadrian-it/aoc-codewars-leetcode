const fs = require("fs");

const inputStr = fs.readFileSync(`${__dirname}/input.txt`).toString();

function isUnique(array) {
  return new Set(array).size === array.length;
}

function main() {
  const windowLength = 14;
  let slidingWindow = [];
  for (let i = 0; i < inputStr.length; i++) {
    slidingWindow.push(inputStr[i]);
    if (slidingWindow.length > windowLength) {
      slidingWindow.shift();
    }
    if (slidingWindow.length === windowLength && isUnique(slidingWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

main();
