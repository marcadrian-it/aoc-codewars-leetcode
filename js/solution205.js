function contains(letters, word) {
  letters.split("").forEach((char) => (word = word.replace(char, "")));
  return word.length === 0;
}

function longestWord(letters) {
  let length = 0,
    longest = null;

  for (let word of words) {
    if (word.length >= length && contains(letters, word)) {
      if (word.length > length) [length, longest] = [word.length, []];

      longest.push(word);
    }
  }

  return longest;
}
