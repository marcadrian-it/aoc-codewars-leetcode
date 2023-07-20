const moves = input.split("\n").map((line) => line.split(" "));

let playerscore = 0;
for (let i = 0; i < moves.length - 1; i++) {
  const [move, letter] = moves[i];
  if (letter === "Z") {
    playerscore += move === "B" ? 9 : move === "C" ? 6 : 3;
  } else if (letter === "Y") {
    playerscore += move === "A" ? 8 : move === "B" ? 5 : 2;
  } else if (letter === "X") {
    playerscore += move === "C" ? 7 : move === "A" ? 4 : 1;
  }
}
