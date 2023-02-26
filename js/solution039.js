function findMissingLetter(array) {
  let alphabet;
  if (array[0].charAt(0) === array[0].charAt(0).toUpperCase()) {
    alphabet = Array.from('abcdefghijklmnopqrstuvwxyz'.toUpperCase());
  } else {
    alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  }
  // Find the index of the starting letter
  const startIndex = alphabet.indexOf(array[0]);
  // Find the index of the ending letter and add 1 to include it in the slice
  const endIndex = alphabet.indexOf(array[array.length - 1]) + 1;

  const slicedLetters = alphabet.slice(startIndex, endIndex);

  return slicedLetters.filter((element) => !array.includes(element))[0];
}
