"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let count = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const values = arr.slice(0, i).concat(arr.slice(i + 1));
    values.forEach((number) => (count += number));
    result.push(count);
    count = 0;
  }
  const min = Math.min(...result);
  const max = Math.max(...result);
  console.log(min + " " + max);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
