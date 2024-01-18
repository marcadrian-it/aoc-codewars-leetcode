function incrementString(str: string): string {
  let numStr = "";
  let index = str.length - 1;

  while (index >= 0 && !isNaN(Number(str[index]))) {
    numStr = str[index] + numStr;
    index--;
  }
  if (numStr === "") {
    return str + "1";
  } else {
    let num = parseInt(numStr) + 1;
    let prefix = str.slice(0, index + 1);
    let paddedNum = num.toString().padStart(numStr.length, "0");
    return String(prefix + paddedNum);
  }
}

console.log(incrementString("file001"));
