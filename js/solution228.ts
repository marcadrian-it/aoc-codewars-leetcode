function isPalindrome(text: string): boolean {
  let textLen = text.length;
  for (let i = 0; i < textLen / 2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
      return false;
    }
  }
  return true;
}
