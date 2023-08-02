const fs = require("fs");

const inputStr = fs.readFileSync(`${__dirname}/input.txt`).toString();

function isUnique(array) {
  return new Set(array).size === array.length;
}

function main() {
  let slidingWindow = [];
  for (let i = 0; i < inputStr.length; i++) {
    slidingWindow.push(inputStr[i]);
    if (slidingWindow.length > 4) {
      slidingWindow.shift();
    }
    if (slidingWindow.length === 4 && isUnique(slidingWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

main();
