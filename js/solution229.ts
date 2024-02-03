function countVowels(text: string): number {
  let counter = 0;
  let vowels = /[aeiou]/i;

  for (let letter of text) {
    if (vowels.test(letter)) {
      counter++;
    }
  }

  return counter;
}

console.log(countVowels("a dog"));
