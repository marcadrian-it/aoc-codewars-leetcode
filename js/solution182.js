// The goal of this exercise is to create a function that counts the occurrences of each character in a string and returns an object with the character counts.

// Example:
// "hello" => { h: 1, e: 1, l: 2, o: 1 }

function countCharacterOccurrences(str) {
  // Create an object to store character counts
  const charCounts = {};

  // Loop through each character in the string
  for (const char of str.toLowerCase()) {
    // If the character is already in the object, increment its count
    // Otherwise, add it to the object with a count of 1
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  return charCounts;
}

// Test cases
console.log(countCharacterOccurrences('hello')); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countCharacterOccurrences('programming')); // { p: 1, r: 2, o: 1, g: 2, a: 1, m: 1, i: 1, n: 1 }
console.log(countCharacterOccurrences('javascript')); // { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
