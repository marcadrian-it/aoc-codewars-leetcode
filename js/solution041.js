function incrementString(strng) {
  let numStr = ''; // initialize the string to hold the number at the end
  let index = strng.length - 1;

  // find the index of the last digit in the string
  while (index >= 0 && !isNaN(strng[index])) {
    numStr = strng[index] + numStr;
    index--;
  }

  // if no digit is found, append '1' to the end of the string
  if (numStr === '') {
    return strng + '1';
  } else {
    let num = parseInt(numStr) + 1; // parse the number and increment it
    let prefix = strng.slice(0, index + 1); // get the prefix of the string before the number
    let paddedNum = num.toString().padStart(numStr.length, '0'); // pad the incremented number with zeros to match the original length
    return prefix + paddedNum;
  }
}
