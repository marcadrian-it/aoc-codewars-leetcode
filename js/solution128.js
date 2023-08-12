const fs = require("fs");

const inputStr = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n");

function countVisibleTrees(inputStr) {
  const input = inputStr.map((row) => row.split("").map(Number));

  let visibleTrees = 0;
  const outerColumnVisibleTrees = input.length * 2;
  visibleTrees += outerColumnVisibleTrees;
  const outerRowVisibleTrees = input[0].length * 2 - 4;
  visibleTrees += outerRowVisibleTrees;

  // i = row, j = column, k = index of tree in a row

  // Count visible trees in interior
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      const currentTreeHeight = input[i][j];
      let isVisible = false;

      // Check if visible from left
      let leftMaxHeight = 0;
      for (let k = j - 1; k >= 0; k--) {
        leftMaxHeight = Math.max(leftMaxHeight, input[i][k]);
      }
      if (currentTreeHeight > leftMaxHeight) {
        isVisible = true;
      }

      // Check if visible from right
      let rightMaxHeight = 0;
      for (let k = j + 1; k < input[i].length; k++) {
        rightMaxHeight = Math.max(rightMaxHeight, input[i][k]);
      }
      if (currentTreeHeight > rightMaxHeight) {
        isVisible = true;
      }

      // Check if visible from top
      let topMaxHeight = 0;
      for (let k = i - 1; k >= 0; k--) {
        topMaxHeight = Math.max(topMaxHeight, input[k][j]);
      }
      if (currentTreeHeight > topMaxHeight) {
        isVisible = true;
      }

      // Check if visible from bottom
      let bottomMaxHeight = 0;
      for (let k = i + 1; k < input.length; k++) {
        bottomMaxHeight = Math.max(bottomMaxHeight, input[k][j]);
      }
      if (currentTreeHeight > bottomMaxHeight) {
        isVisible = true;
      }

      if (isVisible) {
        visibleTrees++;
      }
    }
  }

  return visibleTrees;
}

console.log(countVisibleTrees(inputStr));
