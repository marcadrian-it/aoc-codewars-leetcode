// const { readFileSync } = require("fs");

// const availableCubes = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };
// let possibleGamesIds = [];

// let games = {};

// readFileSync("./input.txt", "utf8")
//   .split("\n")
//   .filter((line) => line.length)
//   .forEach((line) => {
//     games[line.match(/\d+/)] = {
//       red: Math.max(
//         ...Array.from(line.matchAll(/\d+\sred/g), (match) =>
//           match[0].replace(/\s\w+/, "")
//         )
//       ),
//       green: Math.max(
//         ...Array.from(line.matchAll(/\d+\sgreen/g), (match) =>
//           match[0].replace(/\s\w+/, "")
//         )
//       ),
//       blue: Math.max(
//         ...Array.from(line.matchAll(/\d+\sblue/g), (match) =>
//           match[0].replace(/\s\w+/, "")
//         )
//       ),
//     };
//   });

// for (const [gameId, game] of Object.entries(games)) {
//   if (
//     game.red <= availableCubes.red &&
//     game.green <= availableCubes.green &&
//     game.blue <= availableCubes.blue
//   ) {
//     possibleGamesIds.push(gameId);
//   }
// }

// console.log(possibleGamesIds.reduce((acc, curr) => acc + Number(curr), 0));

const { readFileSync } = require("fs");

const availableCubes = {
  red: 12,
  green: 13,
  blue: 14,
};

let games = {};

readFileSync("./input.txt", "utf8")
  .split("\n")
  .filter((line) => line.length)
  .forEach((line) => {
    games[line.match(/\d+/)] = {
      red: Math.max(
        ...Array.from(line.matchAll(/\d+\sred/g), (match) =>
          match[0].replace(/\s\w+/, "")
        )
      ),
      green: Math.max(
        ...Array.from(line.matchAll(/\d+\sgreen/g), (match) =>
          match[0].replace(/\s\w+/, "")
        )
      ),
      blue: Math.max(
        ...Array.from(line.matchAll(/\d+\sblue/g), (match) =>
          match[0].replace(/\s\w+/, "")
        )
      ),
    };
  });

console.log(
  [...Object.values(games)].reduce(
    (acc, { red, blue, green }) => acc + red * blue * green,
    0
  )
);
