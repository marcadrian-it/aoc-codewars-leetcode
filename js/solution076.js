// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x) {
  const vowels = {
    a: { index: 0, used: false },
    e: { index: 1, used: false },
    i: { index: 2, used: false },
    o: { index: 3, used: false },
    u: { index: 4, used: false },
  };

  const strngArr = x.split("");
  strngArr.forEach((letter) => {
    if (vowels[letter]) {
      vowels[letter]["used"] = true;
    }
  });
  console.log(vowels);
  for (const vowel in vowels) {
    if (!vowels[vowel]["used"]) {
      return vowels[vowel]["index"];
    }
  }
}
console.log(absentVowel("John Doe hs seven red pples under his bsket")); // Output: 0
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles")); // Output: 3
