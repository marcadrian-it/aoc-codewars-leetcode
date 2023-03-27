// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
function last(x) {
  const arr = x.split(" ");
  const sorted = arr.sort((a, b) => {
    const lastA = a.slice(-1);
    const lastB = b.slice(-1);
    if (lastA !== lastB) {
      return lastA > lastB ? 1 : -1;
    }
    return arr.indexOf(a) > arr.indexOf(b) ? 1 : -1;
  });
  return sorted;
}
console.log(last("man i need a taxi up to ubud"), [
  "a",
  "need",
  "ubud",
  "i",
  "taxi",
  "man",
  "to",
  "up",
]);
console.log(last("what time are we climbing up the volcano"), [
  "time",
  "are",
  "we",
  "the",
  "climbing",
  "volcano",
  "up",
  "what",
]);
console.log(last("take me to semynak"), ["take", "me", "semynak", "to"]);
