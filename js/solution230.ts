function areAnagrams(strA: string, strB: string): boolean {
  let charMapA: Record<string, number> = {};
  let charMapB: Record<string, number> = {};

  strA = strA.replace(/\s/g, "");
  strB = strB.replace(/\s/g, "");

  for (let i = 0; i < strA.length; i++) {
    charMapA[i] = (charMapA[i] || 0) + 1;
  }

  for (let i = 0; i < strB.length; i++) {
    charMapB[i] = (charMapB[i] || 0) + 1;
  }

  return JSON.stringify(charMapA) === JSON.stringify(charMapB);
}

console.log(areAnagrams("fluster", "restful"));
console.log(areAnagrams("cheater", "teacher"));
console.log(areAnagrams("forty five", "over fifty"));
console.log(areAnagrams("adultery", "true lady"));
