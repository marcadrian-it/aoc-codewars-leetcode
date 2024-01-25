function searchNReplace(
  sentence: string,
  word: string,
  wordReplacement: string
): string {
  if (word[0] === word[0].toUpperCase()) {
    wordReplacement =
      wordReplacement[0].toUpperCase() + wordReplacement.slice(1);
  }
  return sentence.replace(word, wordReplacement);
}

console.log(
  searchNReplace("I think Ruths dog is cuter than your dog!", "Ruths", "adams")
);
