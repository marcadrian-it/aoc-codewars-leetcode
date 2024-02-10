function findMostReccuringChar(strng: string): string {
  let charMap: Record<string, number> = {};
  let maxCharValue = 0;
  let maxChar = "";

  for (const char of strng) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }

    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(findMostReccuringChar("bleblebleblblble"));
