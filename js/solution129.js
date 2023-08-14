// aoc 2022 day 8 part 2
const fs = require("fs");

const inputStr = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n");

function countVisibleTrees(inputStr) {
  const input = inputStr.map((row) => row.split("").map(Number));

  // i = row, j = column, k = index of tree in a row
  let maxScenicScore = 0;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      const currentTreeHeight = input[i][j];
      let scenicScoreLeft = 0;
      let scenicScoreRight = 0;
      let scenicScoreTop = 0;
      let scenicScoreBottom = 0;

      // Check from left
      for (let k = j - 1; k >= 0; k--) {
        scenicScoreLeft++;
        if (currentTreeHeight <= input[i][k]) {
          break;
        }
      }

      // Check from right
      for (let k = j + 1; k < input[i].length; k++) {
        scenicScoreRight++;
        if (currentTreeHeight <= input[i][k]) {
          break;
        }
      }

      // Check  from top
      for (let k = i - 1; k >= 0; k--) {
        scenicScoreTop++;
        if (currentTreeHeight <= input[k][j]) {
          break;
        }
      }

      // Check from bottom
      for (let k = i + 1; k < input.length; k++) {
        scenicScoreBottom++;
        if (currentTreeHeight <= input[k][j]) {
          break;
        }
      }
      const totalScenicScore =
        scenicScoreLeft * scenicScoreRight * scenicScoreTop * scenicScoreBottom;
      if (totalScenicScore > maxScenicScore) {
        maxScenicScore = totalScenicScore;
      }
    }
  }
  return maxScenicScore;
}

console.log(countVisibleTrees(inputStr));
