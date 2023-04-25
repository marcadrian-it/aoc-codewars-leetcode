function persistence(num, count = 0) {
  const numAsString = num.toString();
  if (numAsString.length === 1) {
    return count;
  } else {
    const numArr = numAsString.split("").map((num) => Number(num));
    let result = 1;
    numArr.forEach((num) => (result *= num));
    if (result < 10) {
      return count + 1;
    } else {
      return persistence(result, count + 1);
    }
  }
}
