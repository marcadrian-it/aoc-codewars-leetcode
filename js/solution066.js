// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function convertStrng(strng) {
  const arr = Array.from(strng.toLowerCase());
  const occ = arr.reduce((times, letter) => {
    times[letter] = (times[letter] || 0) + 1;
    return times;
  }, {});

  return arr
    .map((letter) => {
      if (occ[letter] === 1) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
}

console.log(convertStrng("din"));
console.log(convertStrng("recede"));
console.log(convertStrng("Success"));
console.log(convertStrng("(( @"));
