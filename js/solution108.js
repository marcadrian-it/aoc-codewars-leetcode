function rowWeights(array) {
  let team1Sum = 0;
  let team2Sum = 0;
  array.forEach((weight, index) => {
    if ((index + 1) % 2 === 0) {
      team2Sum += weight;
    } else {
      team1Sum += weight;
    }
  });
  return [team1Sum, team2Sum];
}
