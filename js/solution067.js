function stringTransformer(str) {
  let words = str.split(" ").reverse();
  let chars = words.join(" ").split("");
  let returnString = "";

  chars.forEach((char) => {
    returnString +=
      char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  });

  return returnString;
}
