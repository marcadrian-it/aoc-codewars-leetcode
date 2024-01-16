function scramble(str1: string, str2: string): boolean {
  const charCount: { [key: string]: number } = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (!charCount[char]) {
      charCount[char] = 0;
    }
    charCount[char]++;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(scramble("pirate", "irate"));
