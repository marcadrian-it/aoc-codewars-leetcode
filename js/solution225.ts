function longestWord(sentence: string): string | undefined {
  const maxLengthWord = sentence
    .split(" ")
    .reduce((maxLengthWord, currentWord) => {
      if (currentWord.length > maxLengthWord.length) {
        return currentWord;
      } else return maxLengthWord;
    });
  return maxLengthWord;
}

console.log(
  longestWord(
    "So what's the word? Wikipedia's says that it's Methionylthreonylthreonylglutaminylarginyl ... isoleucine (ellipses necessary), which is the chemical name of titin, the largest known protein."
  )
);
