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

function plusMinus(arr) {
  let negative = 0;
  let positive = 0;
  let zero = 0;
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] === 0) {
      zero++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      return;
    }
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
