function alphabetWar(fight) {
  let scoreRight = 0;
  let scoreLeft = 0;
  const left = ["s", "b", "p", "w"];
  const right = ["z", "d", "q", "m"];
  fight = fight.split("");
  for (let i = 0; i < fight.length; i++) {
    if (right.includes(fight[i])) {
      scoreRight += right.indexOf(fight[i]) + 1;
    } else {
      scoreLeft += left.indexOf(fight[i]) + 1;
    }
  }
  if (scoreRight > scoreLeft) {
    return "Right side wins!";
  } else if (scoreRight < scoreLeft) {
    return "Left side wins!";
  } else {
    return "Let's fight again!";
  }
}
