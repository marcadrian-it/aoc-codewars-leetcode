function scramble(str1, str2) {
  // Initialize an empty object to count the frequency of characters in str1
  const charCount = {};

  // Loop through each character in str1
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    // If the character has not been seen before, initialize its count to 0
    if (!charCount[char]) {
      charCount[char] = 0;
    }
    // Increment the count of the character by 1
    charCount[char]++;
  }

  // Loop through each character in str2
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    // If the character does not exist in the charCount object, return false
    if (!charCount[char]) {
      return false;
    }
    // Decrement the count of the character by 1
    charCount[char]--;
  }

  // If all characters in str2 can be formed from str1, return true
  return true;
}