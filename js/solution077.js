// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

function reverseString(s) {
  let reversedString = "";
  for (let i = 0; i < s.length; i++) {
    reversedString = s[i] + reversedString;
  }
  return reversedString;
}
