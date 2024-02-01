function pigIt(str: string): string {
  let resultString = "";
  const words = str.split(" ");

  for (let word of words) {
    if ("?,!".includes(word)) {
      resultString += word;
    } else {
      resultString += `${word.slice(1)}${word[0]}ay `;
    }
  }

  return resultString.trim();
}
