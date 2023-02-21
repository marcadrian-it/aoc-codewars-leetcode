function firstNonRepeatingLetter(s) {
  const occurrences = Array.from(s).reduce((total, letter) => {
    total[letter.toLowerCase()] = (total[letter.toLowerCase()] || 0) + 1;
    return total;
  }, new Map());

  const nonRepeatingLetter = Array.from(s).find(
    (letter) => occurrences[letter.toLowerCase()] === 1
  );
  
  return nonRepeatingLetter || '';
}

console.log(firstNonRepeatingLetter('stress'));
